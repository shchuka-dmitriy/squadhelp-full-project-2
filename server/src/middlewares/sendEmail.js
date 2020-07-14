const sendEmailResolvePass = require('../utils/sendEmailResolvePass');

module.exports.sendEmailForRecoverPass = async (req, res, next) => {
    try {
        const { user: {email, firstName, lastName}, accessToken } = req;
        const name = `${firstName} ${lastName}`;
        const url = `http://${req.hostname === 'localhost' ? req.hostname : req.ip}:3000/recoverPasswordConfirm/${accessToken}`;
        await sendEmailResolvePass.sendEmail(email, name, url);
        res.send('Email send to your address');
    } catch (err) {
        next(err);
    }
};