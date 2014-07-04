/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	name : String,
	description: String
};

var staffTypeSchema = new Schema(fields);
staffTypeSchema.set('toJSON', {
	getters : true,
	setters : true
})
staffTypeSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('StaffType', staffTypeSchema)