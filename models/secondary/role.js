/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	name : String,
	description: String
};

var roleSchema = new Schema(fields);
roleSchema.set('toJSON', {
	getters : true,
	setters : true
})
roleSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('Role', roleSchema)