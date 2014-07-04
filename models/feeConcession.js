/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	feeType : String,
	studyclass: {id:String, name:String},
	concessions: [String]
};

var feeConcessionSchema = new Schema(fields);
feeConcessionSchema.set('toJSON', {
	getters : true,
	setters : true
})
feeConcessionSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('FeeConcession', feeConcessionSchema)