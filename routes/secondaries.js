api = require('../controllers/secondaries');

module.exports = function(app) {
	// Attendance Status
	app.get('/attstatuses', api.findAllAttStatuses);
	app.post('/attstatus', api.createAttendanceStatus);
	// Class Type
	app.get('/classTypes', api.findAllClassTypes);
	app.post('/classType', api.createClassType);
	// Fee Concession
	app.get('/feeConcessions', api.findAllFeeConcessions);
	app.post('/feeConcession', api.createFeeConcession);
	// Fee Paid Status
	app.get('/feePaidStatuses', api.findAllFeePaidStatuses);
	app.post('/feePaidStatus', api.createFeePaidStatus);
	// Fee Type
	app.get('/feeTypes', api.findAllFeeTypes);
	app.post('/feeType', api.createFeeType);
	// Medium Type
	app.get('/mediumTypes', api.findAllMediumTypes);
	app.post('/mediumType', api.createMediumType);
	// Photo Type
	app.get('/photoTypes', api.findAllPhotoTypes);
	app.post('/photoType', api.createPhotoType);
	// Roles
	app.get('/roles', api.findAllRoles);
	app.post('/role', api.createRole);
	// Staff Types
	app.get('/staffTypes', api.findAllStaffTypes);
	app.post('/staffType', api.createStaffType);
	// Subjects
	app.get('/subjects', api.findAllSubjects);
	app.post('/subject', api.createSubject);
	// Test Types
	app.get('/testTypes', api.findAllTestTypes);
	app.post('/testType', api.createTestType);
	
};