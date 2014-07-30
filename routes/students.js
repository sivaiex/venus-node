api = require('../controllers/students');

module.exports = function(app) {
	app.get('/students', api.findAll);
	app.get('/students/count', api.count);
	app.post('/student', api.createStudent);
	
};