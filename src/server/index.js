import App from "../shared/App";
import bodyParser from "body-parser";
import configureStore from "../shared/configureStore";
import dotenv from "dotenv";
import express from "express";
import Footer from "../shared/components/Footer";
import session from "express-session";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import Projects from "./models/projects";
import {Provider} from "react-redux";
import React from "react";
import {renderToString} from "react-dom/server";
import routes from "../shared/routes";
import serialize from "serialize-javascript";
import {StaticRouter, matchPath} from "react-router-dom";
import Visits from "./models/visits";

dotenv.config();
const app = express();
app.use('/',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
	secret: 'profileSecret',
	resave: false,
	saveUninitialized: true
}));

mongoose.connect('mongodb://'+process.env.dbusername+':'+process.env.dbpassword+'@'+process.env.dbhost+':'+process.env.dbport+'/'+process.env.db,
{ keepAlive: 1})
.then(function(){
    console.log('Connected to db');
})
.catch(function(err){
    console.log(err)
})


app.post("/visit",function(req,res){
    console.log(req.body)
    var newVisit = new Visits(JSON.parse(req.body));
    newVisit.save((err)=>{
        if (err) throw err;
        res.json({status:'sucess'});
        console.log('New visit saved');
    })
})

app.get("/data/:type",function(req,res){
    var query = {type:req.params.type};
    Projects.find(query)
    .exec(function(err,result){
        if (err) {
            console.log(err);
            return res.json({result:{},state:"error"});
        }
        var rtn = {result:result,state:"success"}
        return res.json(rtn);
    })
})

app.post("/message",function(req,res){
        var mailOpts, smtpTrans;
        smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: process.env.gmailuser,
              pass: process.env.gmailpassword
            }
        });
        
        mailOpts = {
            from: req.body.inputName + ' &lt;' + req.body.inputEmail + '&gt;',
            to: process.env.gmailuser,
            subject: 'New message from contact form at portfolio page',
            text: `${req.body.inputName} (${req.body.inputEmail}) says: ${req.body.inputText}`
        };
        
        smtpTrans.sendMail(mailOpts, function (err) {
            if (err) {
                console.log(err);
                return res.json({state:'error'});
            }
            return res.json({state:'sent'});
        });
})

app.get('*',function(req,res){
    var userip =  req.headers['x-forwarded-for'];
    userip = userip.split(',')[0];
    const store = configureStore();
    store.dispatch({
        type:"NEW_VISIT",
        payload:{
            ip:userip,
            referrer:req.headers['referer'],
            time:Date.now()
        }
    })
    const initialData = store.getState();
    
    const markup = renderToString(
        <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
            <div>
            <App/>
            <Footer/>
            </div>
        </StaticRouter>
        </Provider>)

    if (matchPath(req.url,routes).path!=req.url)
      res.status(404)
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.3/lux/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css">
        <link rel="stylesheet" href="/index.css">
        <title>Portfolio of Chu-Ya Chia</title>
      </head>
      <body>
        <div id="app">${markup}</div>
        <script>window.__initialData__ = ${serialize(initialData)}</script>
        <script src="/bundle.js" type="text/javascript"></script>
      </body>
    </html>`)
})

app.listen(process.env.PORT || 3000,()=>
console.log("Server is listening")
)