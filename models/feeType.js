/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	name : String,
	description: String
};

var feeTypeSchema = new Schema(fields);
feeTypeSchema.set('toJSON', {
	getters : true,
	setters : true
})
feeTypeSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('FeeType', feeTypeSchema)