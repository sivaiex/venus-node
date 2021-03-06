/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	name : String,
	description: String
};

var testTypeSchema = new Schema(fields);
testTypeSchema.set('toJSON', {
	getters : true,
	setters : true
})
testTypeSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('TestType', testTypeSchema)