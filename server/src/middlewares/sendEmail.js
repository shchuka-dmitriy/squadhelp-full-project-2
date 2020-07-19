const sendEmailResolvePass = require('../utils/sendEmail');

module.exports.sendEmailForRecoverPass = async (req, res, next) => {
    try {
        const { user: {email, firstName, lastName}, accessToken } = req;
        const name = `${firstName} ${lastName}`;
        const url = `http://${req.hostname === 'localhost' ? req.hostname : req.ip}:3000/recoverPasswordConfirm/${accessToken}`;
        const subject = 'Resolve password on squadhelp site';
        const notification =
            `<div>
                    <div><h2>Good day! ${name},</h2><p>You have registered on the site Squadhelp</p></div>
                    <div><p>For resolve password go to the link <a href="${url}">CHANGE PASSWORD</a></p></div>
                    <div><p>With respect, Administration Squadhelp!</p></div>
             </div>`;
        await sendEmailResolvePass.sendEmail(email, notification, subject);
        res.send('Email send to your address');
    } catch (err) {
        next(err);
    }
};