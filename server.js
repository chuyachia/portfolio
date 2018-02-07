'use strict';

const path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    connectDB = require('./app/config/connectDB.js'),
    sendMail = require('./app/config/sendMail.js');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

connectDB(app);
sendMail(app);

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(8080,function(){
    console.log('Node.js listening on port 8080');
});

