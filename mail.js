const { text } = require('express');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
     user: 'bertrandnicolas343@gmail.com',
     pass: 'gpsgwmadmpdutqtv'
    }
 });

const sendMail = (email, subject,text, cb) => {
    const mailOptions = {
        from: email,
        to: 'bertrandnicolas833@gmail.com',
        subject,
        text,
    }

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb (err, null);
        } else {
            cb(null, data);
        }
    });
    }

module.exports = sendMail;