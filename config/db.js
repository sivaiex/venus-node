'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/venus');

exports.mongoose = mongoose;