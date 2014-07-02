var mongoose = require('mongoose'),
Students = mongoose.models.Student;

  // ALL
  exports.findAll = function (req, res) {
    Students.find(function(err, creds) {
      if (err) {
        res.json(500, err);
      } else {
        res.json(creds);
      }
    });
  };

 