var express = require('express');
var paths = require('path');
const app = express();

app.post('/', (req, res) => {
  var data = req.body;
  var csv = '';

  for (var key in data) {
    var columns = key + ',';


  }
});

app.get('/', (req, res) => {

});

app.listen(8080)
