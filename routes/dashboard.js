api = require('../controllers/dashboard');
module.exports = function(app) {
	app.get('/admDashboard', api.getAdminDashboard);
};