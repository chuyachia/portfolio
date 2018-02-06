var webpack = require('webpack');
var path = require('path');
var connectDB = require('./app/config/connectDB.js');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'app/controllers');


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
    before: connectDB
  } 
};

module.exports = config;