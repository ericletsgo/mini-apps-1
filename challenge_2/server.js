var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.JSON());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('node_modules'));
app.use(express.static('client'));

app.post('/', (req, res) => {
  var data = req.body;
  var csv = '';
  console.log(data)

  function traverse(child) {
    for (var key in data) {
      var columns = key + ',';
      var row = data[key] + ',';
      csv += columns + '\n';
      csv += row + '\n';

      if(data.children.length !== 0) {
        data.children.forEach(function(child) {

        });
      }
    }
  }
  // console.log(data)
  res.send();
});

app.listen(8080)
