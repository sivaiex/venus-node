/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	type : String,
	description: String
};

var photoTypeSchema = new Schema(fields);
photoTypeSchema.set('toJSON', {
	getters : true,
	setters : true
})
photoTypeSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('PhotoType', photoTypeSchema)