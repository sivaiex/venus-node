var mongoose = require('mongoose'),
Fee = mongoose.model('Fee')
  // ALL
  exports.findAll = function (req, res) {
	Fee.find(function(err, fees) {
      if (err) {
        res.json(500, err);
      } else {
        res.json(fees);
      }
    });
  };
  
  exports.createFee = function (req, res) {
	   var fee = new Fee(req.body);
		fee.save(function(err) {
	      if (err) {
	        res.json(500, err);
	      } else {
	        res.json(fee);
	      }
	    });
	  };

 