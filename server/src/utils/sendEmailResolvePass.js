const nodemailer = require('nodemailer');

module.exports.sendEmail = (recipientEmail, name, url) => {
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
        subject: 'Resolve password on squadhelp site',
        html: ` <div>
                    <div><h2>Good day! ${name},</h2><p>You have registered on the site Squadhelp</p></div>
                    <div><p>For resolve password go to the link <a href="${url}">CHANGE PASSWORD</a></p></div>
                    <div><p>With respect, Administration Squadhelp!</p></div>
                </div>`,
    };
    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log('Email dont sent, because of: ' + error);
        } else {
            console.log('Email sent');
        }
    });
};