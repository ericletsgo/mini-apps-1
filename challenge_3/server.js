var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log(req.body);
});

app.listen(8000);
