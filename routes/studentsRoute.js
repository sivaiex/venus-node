api = require('../controllers/studentsController');

module.exports = function(app) {
	app.get('/students', api.findAll);
	app.post('/student', api.createStudent);
	
};