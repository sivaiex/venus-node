api = require('../controllers/wineController');

module.exports = function(app) {
	app.get('/wines', api.findAll);
	app.get('/wines/:id', api.findById);
};