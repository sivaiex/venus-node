/**
 * New node file
 */
var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	name : String,
	description: String
};

var attendanceStatusSchema = new Schema(fields);
attendanceStatusSchema.set('toJSON', {
	getters : true,
	setters : true
})
attendanceStatusSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('AttendanceStatus', attendanceStatusSchema)