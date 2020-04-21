'use strict';
const db = require('../models');
const ServerError = require('../errors/ServerError');

module.exports.offersNamesSearchOptions = async (req, res, next) => {
    try {
        const options = {
            fileName: {
                [db.Sequelize.Op.ne]: null
            }
        };
        if ((req.body.time) && (!isNaN(new Date(req.body.time)))) {
            options.timestamp = {
                [db.Sequelize.Op.gte]: new Date(req.body.time)
            }
        }
        req.body.options = options;
        next();
    } catch (e) {
        next(new ServerError());
    }
};