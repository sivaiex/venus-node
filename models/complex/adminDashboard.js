var mongoose = require('mongoose');
var Fee = mongoose.model('Fee');
var FeeType = mongoose.model('FeeType');
var FeeConcession = mongoose.model('FeeConcession');
var FeePaidStatus = mongoose.model('FeePaidStatus');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var fields = {
	studentCount : {
		type : String,
		required : true

	},
	parentCount : {
		type : String,
		required : true

	},
	staffCount : {
		type : String,
		required : true

	},
	fees:[Fee],
	feeTypes:[FeeType],
	feeConcessions:[FeeConcession],
	feePaidStatuses:[FeePaidStatus]
	
};

var adminDashboardSchema = new Schema(fields);
adminDashboardSchema.set('toJSON', {
	getters : true,
	setters : true
})
adminDashboardSchema.set('toObject', {
	getters : true,
	setters : true
})

mongoose.model('AdminDashboard', adminDashboardSchema)