var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var fields = {
	type : {
		type : String,
		required : true

	},

	studyclass : {

		id : {
			type : String
		},
		name : {
			type : String
		},
		classType : {
			type : String
		}
	},

	amount : {
		type : Number,
		required : true
	},
	startDate : {
		type : Date
	},
	endDate : {
		type : Date
	},
	frequency : {
		type : String
	},
	dueOn : {
		type : String
	},
	status : {
		type : String
	}

};

var feeSchema = new Schema(fields);
feeSchema.set('toJSON', {
	getters : true,
	setters : true
})
feeSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('Fee', feeSchema)