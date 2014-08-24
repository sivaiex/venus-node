var mongoose = require('mongoose');
var AttendanceStatus = mongoose.model('AttendanceStatus');
var AdminDashboard = mongoose.model('AdminDashboard');
var Student = mongoose.model('Student');
var Parent = mongoose.model('Parent');
var ClassType = mongoose.model('ClassType');
var Fee = mongoose.model('Fee');
var FeeConcession = mongoose.model('FeeConcession');
var FeePaidStatus = mongoose.model('FeePaidStatus');
var FeeType = mongoose.model('FeeType');
var MediumType = mongoose.model('MediumType');
var PhotoType = mongoose.model('PhotoType');
var Role = mongoose.model('Role');
var StaffType = mongoose.model('StaffType');
var Subject = mongoose.model('Subject');
var TestType = mongoose.model('TestType');

// Admin Dash board
exports.getAdminDashboard = function(req, res) {
	console.log("get Admin Dashboard called");
	var adminDashboard = new AdminDashboard();

	// Students Count
	Student.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			console.log(count);
			adminDashboard.studentCount = count;
			parentsCount(adminDashboard);
		}
	});

	// Parents Count
	var parentsCount = function(adminDashboard) {
		Parent.count(function(err, count) {
			if (err) {
				res.json(500, err);
			} else {
				console.log(count);
				adminDashboard.parentCount = count;
				staffCount(adminDashboard);
			}
		});
	}

	// Staff Count
	var staffCount = function(adminDashboard) {
		Parent.count(function(err, count) {
			if (err) {
				res.json(500, err);
			} else {
				adminDashboard.staffCount = count;
				fees(adminDashboard);
			}
		});
	}

	// Fees
	var fees = function(adminDashboard) {
		Fee.find(function(err, fees) {
			if (err) {
				res.json(500, err);
			} else {
				adminDashboard.fees = fees;
				feeTypes(adminDashboard);
			}
		});
	}

	// FeeTypes
	var feeTypes = function(adminDashboard) {
		FeeType.find(function(err, feeTypes) {
			if (err) {
				res.json(500, err);
			} else {
				for (var i = 0; i < feeTypes.length; i++) {
					adminDashboard.feeTypes[i] = feeTypes[i];
				}
				feeConcessions(adminDashboard);
			}
		});
	}

	// FeeConcessions
	var feeConcessions = function(adminDashboard) {
		FeeConcession.find(function(err, feeConcessions) {
			if (err) {
				res.json(500, err);
			} else {
				for (var i = 0; i < feeConcessions.length; i++) {
					adminDashboard.feeConcessions[i] = feeConcessions[i];
				}

				feePaidStatuses(adminDashboard);
			}
		});
	}

	// FeePaidStatuses
	var feePaidStatuses = function(adminDashboard) {
		FeePaidStatus.find(function(err, feePaidStatuses) {
			if (err) {
				res.json(500, err);
			} else {
				for (var i = 0; i < feePaidStatuses.length; i++) {
					adminDashboard.feePaidStatuses[i] = feePaidStatuses[i];
				}

				returnResponse(adminDashboard);
			}
		});
	}

	var returnResponse = function(adminDashboard) {
		res.json(adminDashboard)
	};

};
