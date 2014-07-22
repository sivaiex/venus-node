api = require('../controllers/studyClass');

module.exports = function(app) {
	app.get('/classes', api.findAll);
	app.post('/classes', api.createStudyClass);
	
};