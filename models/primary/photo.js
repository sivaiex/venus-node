var mongoose = require('mongoose'), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var fields = {
	type : {
		type : String
	},
	data : {
		type : Buffer
	},
	contentType : {
		type : String
	}
};

var phototSchema = new Schema(fields);
phototSchema.set('toJSON', {
	getters : true,
	setters : true
})
phototSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('Photo', phototSchema)