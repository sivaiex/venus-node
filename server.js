var express = require('express');
var db = require('./config/db');
var fs = require('fs');
var path = require('path');

// Bootstrap models
var modelsPath = path.join(__dirname, 'models');

fs.readdirSync(modelsPath).forEach(function(file) {
	require(modelsPath + '/' + file);
});

var app = express();

// Add all the routes here
require('./routes/winesRoute')(app);
require('./routes/studentsRoute')(app);

app.listen(3000);
console.log('Venus Services Started ..listening on port 3000...');