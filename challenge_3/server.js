const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

var schema = {
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
}

app.post('/', (req, res) => {
  var schema = {};
  for (var i = 0; i < Object.keys(req.body).length; i++) {
    schema[Object.keys(req.body)[i]] = String;
  }
  var userSchema = mongoose.Schema(schema);
  var user = mongoose.model('user', req.body);
  var saveInfo = function(obj) {
    for (var i = 0; i < Object.keys(req.body).length; i++) {
      var keyArr = Object.keys(req.body)[i];

      user[keyArr] = obj[keyArr];
    }
  }
  saveInfo(req.body);
});

app.listen(8000);
