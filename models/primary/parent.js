var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
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
	gender : {
		type : String,
		required : true,
		enum : [ "MALE", "FEMALE" ]
	},
	address1 : {
		type : String,
		required : true
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
	email : {
		type : String
	},
	allowSMS : {
		type : Boolean
	},
	landline : {
		type : Number
	},
	mobile1 : {
		type : Number
	},
	mobile2 : {
		type : Number
	},
	portalAccess : {
		type : Boolean
	}

};

var parentSchema = new Schema(fields);
parentSchema.set('toJSON', {
	getters : true,
	setters : true
})
parentSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('Parent', parentSchema)