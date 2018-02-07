const webpack = require('webpack'),
  path = require('path'),
  bodyParser = require('body-parser'),
  connectDB = require('./app/config/connectDB.js'),
  sendMail = require('./app/config/sendMail.js'),
  BUILD_DIR = path.resolve(__dirname, 'public/js'),
  APP_DIR = path.resolve(__dirname, 'app/controllers');

function serverSetUp(app){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true })); 
  connectDB(app);
  sendMail(app);
}

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel-loader'
      }
    ]
  },
   devServer:{
    publicPath: "/js/",
    contentBase:"public",
    host: process.env.IP,
    port: process.env.PORT,
    "public":"practice-space-ccyqc.c9users.io",
    before: serverSetUp
  } 
};

module.exports = config;