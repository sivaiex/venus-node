api = require('../controllers/studentsController');

module.exports = function(app) {
	app.get('/students', api.findAll);
	
};