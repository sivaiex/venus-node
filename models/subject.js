/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	name : String,
	description: String
};

var subjectSchema = new Schema(fields);
subjectSchema.set('toJSON', {
	getters : true,
	setters : true
})
subjectSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('Subject', subjectSchema)