const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Otp = require('../models/otp');


router.post('/verify', function (req, res) {

    if (req.body.otp == otp) {
        res.send("You has been successfully registered");
    }
    else {
        res.render('otp', { msg: 'otp is incorrect' });
    }
});

router.post('/resend', function (req, res) {
    var mailOptions = {
        to: email,
        subject: "Otp for registration is: ",
        html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('otp', { msg: "otp has been sent" });
    });

});







module.exports = router;

