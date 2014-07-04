var express = require('express');
var db = require('./config/db');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser')(app)

var app = express();
app.use(bodyParser);

//Bootstrap models
var modelsPath = path.join(__dirname, 'models');

fs.readdirSync(modelsPath).forEach(function(file) {
	require(modelsPath + '/' + file);
});

// Add all the routes here

require('./routes/students')(app);
require('./routes/secondaries')(app);




app.listen(3000);
console.log('Venus Services Started ..listening on port 3000...');