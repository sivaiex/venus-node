var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	admission : {
		number : {
			type : String,
			required : true
		},
		date : {
			type : Date,
			required : true
		},
		releiving : {
			type : Date
		}
	},
	name : {
		first : {
			type : String,
			required : true
		},
		last : {
			type : String,
			required : true
		}
	},
	dob : {
		type : Date,
		required : true
	},
	parents : {
		father : {
			type : String
		},
		mother : {
			type : String,
			required : true
		}
	},
	studyclass : {
		present : {
			id : {
				type : String
			},
			section : {
				type : String
			}
		},
		admitted : {
			id : {
				type : String
			},
			section : {
				type : String
			}
		}
	},
	medium : {
		type : String,
		required : true
	}

};

var studentSchema = new Schema(fields);
studentSchema.set('toJSON', {
	getters : true,
	setters : true
})
studentSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('Student', studentSchema)