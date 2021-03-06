var express = require('express');
var db = require('./config/db');
var secondariesdata = require('./config/secondaries');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});


//Bootstrap models
var primaryModelsPath = path.join(__dirname, 'models/primary');
fs.readdirSync(primaryModelsPath).forEach(function(file) {
	require(primaryModelsPath + '/' + file);
});
var secondaryModelsPath = path.join(__dirname, 'models/secondary');
fs.readdirSync(secondaryModelsPath).forEach(function(file) {
	require(secondaryModelsPath + '/' + file);
});
var complexModelsPath = path.join(__dirname, 'models/complex');
fs.readdirSync(complexModelsPath).forEach(function(file) {
	require(complexModelsPath + '/' + file);
});

// Add all the routes here
require('./routes/students')(app);
require('./routes/fees')(app);
require('./routes/secondaries')(app);
require('./routes/studyClasses')(app);
require('./routes/dashboard')(app);

//secondariesdata.defaultdata();
app.listen(3000);
console.log('Venus Services Started ..listening on port 3000...');