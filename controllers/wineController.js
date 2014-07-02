exports.findAll = function(req,res) {
	res.send({"name":"wine1"});
};
exports.findById = function(req,res) {
	res.send({"id":req.params.id,"name":"wine1"});
};