const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');



router.post('/', async(req, res, next) => {
    
    // let otp = Math.floor(1000 + Math.random() *9000)
    let otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);
    // res.send(otp)
    console.log(otp)
   
   const mail = nodemailer.createTransport({
       service: 'gmail',
       auth:{
           user:'sonalinare11@gmail.com',
           pass:'Sonalinare@1234' 

       }
   });

   const mailOptions = {
    from: 'sonalinare11@gmail.com',
    to: req.body.email,
    subject: `Hii  your new OTP for login `,
    html: `<h3>OTP for account login is </h3> <h1 style='font-weight:bold; color:#5e56f5;'>${otp.toString()}</h1>`
  };
    
  mail.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Mail Sent')
    }
    });

})


module.exports = router;