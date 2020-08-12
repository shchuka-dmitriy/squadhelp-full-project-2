import { sendEmail } from '../utils/sendEmail';
import ServerError from '../errors/ServerError';
const CONSTANTS = require('../constants');
const contestQueries = require('./queries/contestQueries');
const controller = require('../config/socketIO/socketIOConfig');
const db = require('../models');
const userQueries = require('./queries/userQueries');

module.exports.getAllOffers = (req, res, next) => {
    const {limit, offset, offerStatus} = req.body;
    db.Offers.findAndCountAll(
        {
            where: {
                moderatorStatus: offerStatus
            },
            attributes: {exclude: ['userId', 'contestId']},
            limit: limit,
            offset: offset ? offset : 0,
            order: [['text', 'ASC']],
            include: [
                {
                    model: db.Users,
                    required: true,
                    attributes: {
                        exclude: [
                            'password',
                            'role',
                            'balance',
                            'accessToken',
                        ],
                    },
                },
                {
                    model: db.Contests,
                    required: true,
                    attributes: ['contestType']
                },
            ]
        }
    )
        .then(offers => {
            //res.send({offers, haveMore: offers.length >= limit});
            res.send(offers);
        })
        .catch(err => {
            next(new ServerError(err));
        })
};

module.exports.setOfferStatusByModerator = async (req, res, next) => {
    try {
        const {body: {command, offerId}} = req;
        const {userId, text} = await db.Offers.findOne({where: {id: offerId}});
        const {firstName, lastName, email} = await userQueries.findUser({ id: userId });
        let changedOffer;
        switch (command) {
            case 'reject_by_moderator':
                    changedOffer = await rejectOffer(offerId, userId, text, email, firstName, lastName);
                break;
            case 'confirm_by_moderator':
                    changedOffer = await confirmOffer(offerId, userId, text, email, firstName, lastName);
                break;
            default: {
                new ServerError();
            }
        }
        res.send(changedOffer);
    }
    catch ( err ) {
        next(err);
    }
};


const rejectOffer = async (offerId, creatorId, text, email, firstName, lastName) => {
    const rejectedOffer = await contestQueries.updateOffer(
        {moderatorStatus: CONSTANTS.OFFER_STATUS_REJECTED}, {id: offerId});
    controller.getNotificationController().emitChangeOfferStatus(creatorId,
        'Your offers was rejected:', text);
    const name = `${firstName} ${lastName}`;
    const subject = 'Reject offer on Squadhelp';
    const notification =
        `<div>
            <div><h2>Good day! ${name},</h2><p>You have registered on the site Squadhelp</p></div>
            <div><p>Yours offers was rejected: ${text}</p></div>
            <div><p>With respect, Administration Squadhelp!</p></div>
         </div>`;
    await sendEmail(email, subject, notification);
    return rejectedOffer;
};


const confirmOffer = async (offerId, creatorId, text, email, firstName, lastName) => {
    const confirmedOffer = await contestQueries.updateOffer(
        {moderatorStatus: CONSTANTS.OFFER_STATUS_CONFIRM}, {id: offerId});
    const name = `${firstName} ${lastName}`;
    const subject = 'Confirm offer on Squadhelp';
    const notification =
        `<div>
            <div><h2>Good day! ${name},</h2><p>You have registered on the site Squadhelp</p></div>
            <div><p>Yours offers was confirmed: ${text}</p></div>
            <div><p>With respect, Administration Squadhelp!</p></div>
         </div>`;
    await sendEmail(email, subject, notification);
    return confirmedOffer;
};