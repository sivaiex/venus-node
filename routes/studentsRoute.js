sapi = require('../controllers/studentsController');

module.exports = function(app) {
	app.get('/students', sapi.findAll);
	
};