use 'strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;


var fields = {
	firstname: { type: String, required: true},
	lastname: { type: String, required: true}
	
};

var studentSchema = new Schema(fields);
studentSchema.set('toJSON', {getters: true, setters: true})
studentSchema.set('toObject', {getters: true, setters: true})

module.exports = mongoose.model('Student', studentSchema);