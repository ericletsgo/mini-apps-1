var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.post('/', (req, res) => {
  
});

app.listen(8000);
