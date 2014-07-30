api = require('../controllers/secondaries');

module.exports = function(app) {
	// Attendance Status
	app.get('/attstatuses', api.findAllAttStatuses);
	app.get('/attstatuse/count', api.countAttStatuses);
	app.post('/attstatus', api.createAttendanceStatus);
	
	// Class Type
	app.get('/classTypes', api.findAllClassTypes);
	app.get('/classType/count', api.countClassType);
	app.post('/classType', api.createClassType);
	
	// Fee Concession
	app.get('/feeConcessions', api.findAllFeeConcessions);
	app.get('/feeConcession/count', api.countFeeConcession);
	app.post('/feeConcession', api.createFeeConcession);
	
	// Fee Paid Status
	app.get('/feePaidStatuses', api.findAllFeePaidStatuses);
	app.get('/feePaidStatus/count', api.countPaidStatus);
	app.post('/feePaidStatus', api.createFeePaidStatus);
	
	// Fee Type
	app.get('/feeTypes', api.findAllFeeTypes);
	app.get('/feeType/count', api.countFeeType);
	app.post('/feeType', api.createFeeType);
	
	// Medium Type
	app.get('/mediumTypes', api.findAllMediumTypes);
	app.get('/mediumType/count', api.countMediumType);
	app.post('/mediumType', api.createMediumType);
	
	// Photo Type
	app.get('/photoTypes', api.findAllPhotoTypes);
	app.get('/photoType/count', api.countPhotoType);
	app.post('/photoType', api.createPhotoType);
	
	// Roles
	app.get('/roles', api.findAllRoles);
	app.get('/role/count', api.countRole);
	app.post('/role', api.createRole);
	
	// Staff Types
	app.get('/staffTypes', api.findAllStaffTypes);
	app.get('/staffType/count', api.countStaffType);
	app.post('/staffType', api.createStaffType);
	
	// Subjects
	app.get('/subjects', api.findAllSubjects);
	app.get('/subject/count', api.countSubject);
	app.post('/subject', api.createSubject);
	
	// Test Types
	app.get('/testTypes', api.findAllTestTypes);
	app.get('/testType/count', api.countTestType);
	app.post('/testType', api.createTestType);
	
};