var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {

	studyclass : {

		id : {
			type : String
		},
		section : {
			type : String
		}

	},
	date : {
		type : Date,
		required : true
	},

	timetable : [ {
		period : {
			type : String
		},
		subject : {
			type : String
		},
		teacher : {
			id : {
				type : String
			},
			name : {
				type : String
			}
		}

	} ]

};

var classTimeTableSchema = new Schema(fields);
classTimeTableSchema.set('toJSON', {
	getters : true,
	setters : true
})
classTimeTableSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('ClassTimeTable', classTimeTableSchema)