const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const names = require('./routes/index.js');

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/expressDB', {useMongoClient: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error'));

db.once('open', function(){
  console.log("connected successfully to the database expressDB");
});

app.use('/names', names);

module.exports = app;
