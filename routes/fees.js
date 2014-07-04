api = require('../controllers/fees');

module.exports = function(app) {
	app.get('/fees', api.findAll);
	app.post('/fee', api.createFee);
	
};