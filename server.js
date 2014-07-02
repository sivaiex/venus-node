var express = require('express');
 
var app = express();
 
// Add all the routes here
require('./routes/winesRoute')(app);
require('./routes/studentsRoute')(app);
 
app.listen(3000);
console.log('Venus Services Started ..listening on port 3000...');