'use strict';

const nodemailer = require('nodemailer');
var config;
if (process.env.C9_PROJECT) {
  config  = require('../../../config/config.js');
  console.log('Running on C9 IDE');
} else {
  config = process.env;
  console.log('Running on glitch');
}
    
module.exports = function(app){
    app.post("/message", function(req,res) {
        var mailOpts, smtpTrans;
        smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: config.gmailuser,
              pass: config.gmailpassword
            }
        });
        
        mailOpts = {
            from: req.body.inputName + ' &lt;' + req.body.inputEmail + '&gt;',
            to: config.gmailuser,
            subject: 'New message from contact form at portfolio page',
            text: `${req.body.inputName} (${req.body.inputEmail}) says: ${req.body.inputText}`
        };
        
        smtpTrans.sendMail(mailOpts, function (err) {
            if (err) throw new Error('Fail to send message');
            res.send('sent');
        });
        
        });
};

