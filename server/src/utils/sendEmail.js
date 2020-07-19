const nodemailer = require('nodemailer');

module.exports.sendEmail = (recipientEmail, subject, notification) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'additional.dmitriy.shchuka@gmail.com',
            pass: 'squadhelp2000'
        }
    });
    const mailOptions = {
        from: 'additional.dmitriy.shchuka@gmail.com',
        to: recipientEmail,
        subject: subject,
        html: notification,
    };
    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log('Email dont sent, because of: ' + error);
        } else {
            console.log('Email sent');
        }
    });
};