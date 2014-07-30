var mongoose = require('mongoose'), Student = mongoose.model('Student')
// ALL
exports.findAll = function(req, res) {
	console.log("findAll called");
	Student.find(function(err, students) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(students);
		}
	});
};

exports.createStudent = function(req, res) {
	var student = new Student(req.body);
	student.save(function(err) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(student);
		}
	});
};

exports.count = function(req, res) {
	Student.count(function(err, count) {
		if (err) {
			res.json(500, err);
		} else {
			res.json(count);
		}
	});
};
