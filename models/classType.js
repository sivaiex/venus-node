/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	name : String,
	description: String
};

var classTypeSchema = new Schema(fields);
classTypeSchema.set('toJSON', {
	getters : true,
	setters : true
})
classTypeSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('ClassType', classTypeSchema)