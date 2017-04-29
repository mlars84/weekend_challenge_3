// requires
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();
var port = 3001;

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// base url hit
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

app.listen(port, function(req, res) {
  console.log('listening on port', port);
});
