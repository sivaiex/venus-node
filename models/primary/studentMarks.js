var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var fields = {
	admission : {
		number : {
			type : String,
			required : false
		},
		date : {
			type : Date,
			required : false
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
		required : false
	},
	parents : {
		father : {
			type : String
		},
		mother : {
			type : String,
			required : false
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
		required : false
	},
	promotion : {
		studyclass : {
			type : String
		},
		academicYear : {
			type : String
		},
		promoted : {
			type : Boolean
		},
		reason : {
			type : String
		},
		date : {
			type : Date
		},
		promotedBy : {
			type : String
		}
	},
	fee : [ {
		feeid : {
			type : String
		},
		enable : {
			type : Boolean
		}
	} ],
	record : [ {
		name : {
			type : String
		},
		issuedOn : {
			type : Date
		},
		approvedBy : {
			type : String
		},
		issuedBy : {
			type : String
		},
		docLocation : {
			type : String
		}
	} ]

};

var studentMarksSchema = new Schema(fields);
studentMarksSchema.set('toJSON', {
	getters : true,
	setters : true
})
studentMarksSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('StudentMarks', studentMarksSchema)