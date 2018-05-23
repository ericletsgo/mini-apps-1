var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/', (req, res) => {
  var data = req.body;
  var container = [];

  for (var i = 0; i < Object.keys(data).length -1; i++) {
    container.push(Object.keys(data)[i]);
  }
  container.push('\n');
  for (var i = 0; i < Object.keys(data).length -1; i++) {
    container.push(data[Object.keys(data)[i]]);
  }
  function traverse(node) {
    container.push('\n');
    if (node.children.length !== 0) {
      node.children.forEach(function(child) {
        for (var i = 0; i < Object.keys(child).length -1; i++) {
          container.push(child[Object.keys(child)[i]]);
        }
        traverse(child);
      });
    }
  }
  traverse(data);

  console.log(container[0]);

  var resultArray = [];
  var bucket = [];

  for (var i = 0; i < container.length; i++) {

    if (container[i] === '\n') {
      resultArray.push(bucket);
      bucket = [];
    } else {
      bucket.push(container[i]);
    }
  }
  res.send(resultArray);
});

app.listen(8080)
