const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoute = require('./api/routes/user')
const mailRoute = require('./api/routes/mail')
const otpRoute = require('./api/routes/otp')
const approveRoute = require('./api/routes/approve')
const loginRoute = require('./api/routes/login')
const registerRoute = require("./api/routes/register")

mongoose.connect('mongodb://localhost:27017/database', {useNewUrlParser: true}, (err) => {
if (!err) {console.log('MongoDB Connection Succeeded.') }
else {console.log('Error in DB connection:' + err) }
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user',userRoute);
app.use('/mail',mailRoute);
app.use('/otp',otpRoute);
app.use('/approve',approveRoute);
app.use('/login',loginRoute);
app.use('/register',registerRoute);

module.exports = app;