/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	type : String,
	description: String
};

var mediumTypeSchema = new Schema(fields);
mediumTypeSchema.set('toJSON', {
	getters : true,
	setters : true
})
mediumTypeSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('MediumType', mediumTypeSchema)