var mongoose = require('mongoose'),
Student = mongoose.model('Student')
  // ALL
  exports.findAll = function (req, res) {
	Student.find(function(err, students) {
      if (err) {
        res.json(500, err);
      } else {
        res.json(students);
      }
    });
  };
  
  exports.createStudent = function (req, res) {
	  console.log("create Student called");
	  console.log(req);
	  console.log(req.body);
	   var student = new Student(req.body);
		student.save(function(err) {
	      if (err) {
	        res.json(500, err);
	      } else {
	        res.json(student);
	      }
	    });
	  };

 