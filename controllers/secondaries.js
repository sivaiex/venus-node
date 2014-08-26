var mongoose = require('mongoose');
var AttendanceStatus = mongoose.model('AttendanceStatus');
var ClassType = mongoose.model('ClassType');
var FeeConcession = mongoose.model('FeeConcession');
var FeePaidStatus = mongoose.model('FeePaidStatus');
var FeeType = mongoose.model('FeeType');
var MediumType = mongoose.model('MediumType');
var PhotoType = mongoose.model('PhotoType');
var Role = mongoose.model('Role');
var StaffType = mongoose.model('StaffType');
var Subject = mongoose.model('Subject');
var TestType = mongoose.model('TestType');

// Attendance Status
exports.findAllAttStatuses = function(req, res) {
	AttendanceStatus.find(function(err, attStatus) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(attStatus);
		}
	});
};

// Attendance Status Count
exports.countAttStatuses = function(req, res) {
	AttendanceStatus.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};

exports.createAttendanceStatus = function(req, res) {
	var attendanceStatus = new AttendanceStatus(req.body);
	attendanceStatus.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(attendanceStatus);
		}
	});
};

// Class Type
exports.findAllClassTypes = function(req, res) {
	ClassType.find(function(err, classType) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(classType);
		}
	});
};

// ClassType Status Count
exports.countClassType = function(req, res) {
	ClassType.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};

exports.createClassType = function(req, res) {
	var classType = new ClassType(req.body);
	classType.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(classType);
		}
	});
};

// Fee Concession
exports.findAllFeeConcessions = function(req, res) {
	FeeConcession.find(function(err, feeConcession) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(feeConcession);
		}
	});
};

// FeeConcession Count
exports.countFeeConcession = function(req, res) {
	FeeConcession.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};

exports.createFeeConcession = function(req, res) {
	var feeConcession = new FeeConcession(req.body);
	feeConcession.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(feeConcession);
		}
	});
};

// Fee Paid Status
exports.findAllFeePaidStatuses = function(req, res) {
	FeePaidStatus.find(function(err, feePaidStatus) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(feePaidStatus);
		}
	});
};

// PaidStatus Count
exports.countPaidStatus = function(req, res) {
	PaidStatus.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};

exports.createFeePaidStatus = function(req, res) {
	var feePaidStatus = new FeePaidStatus(req.body);
	feePaidStatus.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(feePaidStatus);
		}
	});
};

// Fee Type
exports.findAllFeeTypes = function(req, res) {
	FeeType.find(function(err, feeType) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(feeType);
		}
	});
};

// FeeType Count
exports.countFeeType = function(req, res) {
	FeeType.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};


exports.getFeeType = function(req, res) {
	console.log("find by id");
	FeeType.findById(req.params.id,function(err, feeType) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(feeType);
		}
	});
};

exports.deleteFeeType = function(req, res) {
	FeeType.findById(req.params.id,function(err, feeType) {
		if (err) {
			res.json(500, err);
		} else {
			feeType.remove();
			res.json(req.params.id);
		}
	});
};

exports.createFeeType = function(req, res) {
	var feeType = new FeeType(req.body);
	feeType.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(feeType);
		}
	});
};

// Medium Type
exports.findAllMediumTypes = function(req, res) {
	MediumType.find(function(err, mediumType) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(mediumType);
		}
	});
};

// MediumType Count
exports.countMediumType = function(req, res) {
	MediumType.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};

exports.createMediumType = function(req, res) {
	var mediumType = new MediumType(req.body);
	mediumType.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(mediumType);
		}
	});
};

// Photo Type
exports.findAllPhotoTypes = function(req, res) {
	PhotoType.find(function(err, photoType) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(photoType);
		}
	});
};

// PhotoType Count
exports.countPhotoType = function(req, res) {
	PhotoType.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};

exports.createPhotoType = function(req, res) {
	var photoType = new PhotoType(req.body);
	photoType.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(photoType);
		}
	});
};

// Role
exports.findAllRoles = function(req, res) {
	Role.find(function(err, role) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(role);
		}
	});
};

// Role Count
exports.countRole = function(req, res) {
	Role.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};

exports.createRole = function(req, res) {
	var role = new Role(req.body);
	role.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(role);
		}
	});
};

// Staff Type
exports.findAllStaffTypes = function(req, res) {
	StaffType.find(function(err, staffType) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(staffType);
		}
	});
};

// StaffType Count
exports.countStaffType = function(req, res) {
	StaffType.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};

exports.createStaffType = function(req, res) {
	var staffType = new StaffType(req.body);
	role.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(staffType);
		}
	});
};

// Subject
exports.findAllSubjects = function(req, res) {
	Subject.find(function(err, subject) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(subject);
		}
	});
};
// Subject Count
exports.countSubject = function(req, res) {
	Subject.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};
exports.createSubject = function(req, res) {
	var subject = new Subject(req.body);
	subject.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(subject);
		}
	});
};

// Test Type
exports.findAllTestTypes = function(req, res) {
	TestType.find(function(err, testType) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(testType);
		}
	});
};
// TestType Count
exports.countTestType = function(req, res) {
	TestType.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};
exports.createTestType = function(req, res) {
	var testType = new TestType(req.body);
	testType.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(testType);
		}
	});
};
