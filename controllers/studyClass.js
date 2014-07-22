var mongoose = require('mongoose'),
StudyClass = mongoose.model('StudyClass')
  // ALL
  exports.findAll = function (req, res) {
	console.log("findAll called");
	StudyClass.find(function(err, studyClasses) {
      if (err) {
        res.json(500, err);
      } else {
        res.json(studyClasses);
      }
    });
  };
  
  exports.createStudyClass = function (req, res) {
	  console.log("create StudyClass called");
	 
	   var studyClass = new StudyClass(req.body);
	   studyClass.save(function(err) {
	      if (err) {
	        res.json(500, err);
	      } else {
	        res.json(studyClass);
	      }
	    });
	  };

 