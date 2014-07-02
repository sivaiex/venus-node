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

 