const express = require('express');
const mongoose = require('mongoose');

const app = express()

mongoose.connect('mongodb://localhost:27017/expressDB', {useMongoClient: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error'));

db.once('open', function(){
  console.log("connected successfully to the database expressDB");
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
