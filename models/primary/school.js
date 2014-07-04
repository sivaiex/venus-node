var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	name : {
		type : String,
		required : true
	},
	regNumber : {
		type : String
	},
	establishedDate : {
		type : Date
	},
	address1 : {
		type : String
	},
	address2 : {
		type : String
	},
	city : {
		type : String
	},
	state : {
		type : String
	},
	postalCode : {
		type : Number
	},
	logo : {
		type : Buffer
	},
	phone1 : {
		type : String
	},
	phone2 : {
		type : String
	},
	phone3 : {
		type : String
	},
	email1 : {
		type : String
	},
	email2 : {
		type : String
	},
	correspondant : {
		type : String
	}
};

var schoolSchema = new Schema(fields);
schoolSchema.set('toJSON', {
	getters : true,
	setters : true
})
schoolSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('School', schoolSchema)