var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	name : {
		type : String
	},
	classType : {
		type : String
	},
	sections : [ {
		name : {
			type : String
		},
		classTeacher : {
			type : String
		},
		buiding : {
			type : String
		},
		room : {
			type : String
		}
	} ]
};

var studyClassSchema = new Schema(fields);
studyClassSchema.set('toJSON', {
	getters : true,
	setters : true
})
studyClassSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('StudyClass', studyClassSchema)