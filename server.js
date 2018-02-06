'use strict'
var path = require('path');
var express = require('express');
var mongodb = require('mongodb').MongoClient;
var app = express();

var connectDB = require('./app/config/connectDB.js');

app.use('/', express.static(path.join(__dirname, 'public')));


connectDB(app);
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(8080,function(){
    console.log('Node.js listening on port 8080');
})

