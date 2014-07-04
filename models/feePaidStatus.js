/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	name : String,
	description: String
};

var feePaidStatusSchema = new Schema(fields);
feePaidStatusSchema.set('toJSON', {
	getters : true,
	setters : true
})
feePaidStatusSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('FeePaidStatus', feePaidStatusSchema)