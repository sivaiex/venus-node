var express = require('express');
var db = require('./config/db');
var secondariesdata = require('./config/secondaries');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser')(app)

var app = express();
app.use(bodyParser);

//Bootstrap models
var primaryModelsPath = path.join(__dirname, 'models/primary');
fs.readdirSync(primaryModelsPath).forEach(function(file) {
	require(primaryModelsPath + '/' + file);
});
var secondaryModelsPath = path.join(__dirname, 'models/secondary');
fs.readdirSync(secondaryModelsPath).forEach(function(file) {
	require(secondaryModelsPath + '/' + file);
});

// Add all the routes here
require('./routes/students')(app);
require('./routes/fees')(app);
require('./routes/secondaries')(app);

//secondariesdata.defaultdata();
app.listen(3000);
console.log('Venus Services Started ..listening on port 3000...');