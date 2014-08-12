var AppRouter = Backbone.Router.extend({

	routes : {
		"" : "home",
		"students" : "students",
		"admnDashboard" : "admnDashboard",
		"feeType" : "feeType",
		"fee" : "fee",
		"subject" : "subject",
		"testType" : "testType",
		"staffType" : "staffType",
		"about" : "about"
	},

	initialize : function() {
		this.headerView = new HeaderView();
		$('.header').html(this.headerView.el);
	},

	home : function(id) {
		var signin = new Signin();
		$('#maincontent').html(new HomeView({
			model : signin
		}).el);

	},

	feeType : function(id) {
		var feeType = new FeeType();
		$('#maincontent').html(new FeeTypeView({
			model : feeType
		}).el);

	},
	testType : function(id) {
		var testType = new TestType();
		$('#maincontent').html(new TestTypeView({
			model : testType
		}).el);

	},
	staffType : function(id) {
		var staffType = new StaffType();
		$('#maincontent').html(new StaffTypeView({
			model : staffType
		}).el);

	},
	fee : function(id) {
		var fee = new Fee();
		$('#maincontent').html(new FeeView({
			model : fee
		}).el);

	},
	subject : function(id) {
		var subject = new Subject();
		$('#maincontent').html(new SubjectView({
			model : subject
		}).el);

	},

	admnDashboard : function(id) {
		var adminDashboard = new AdminDashboard();

		adminDashboard.fetch({
			success : function() {
				$('#maincontent').html(new AdminDashboardView({
					model : adminDashboard
				}).render().el);
			}
		});
	},

	about : function() {
		if (!this.aboutView) {
			this.aboutView = new AboutView();
		}
		$('#maincontent').html(this.aboutView.el);
		this.headerView.selectMenuItem('about-menu');
	},

	students : function(page) {

	},

});

utils.loadTemplate([ 'HomeView', 'HeaderView', 'AboutView',
		'AdminDashboardView', 'FeeTypeView', 'FeeView', 'SubjectView','TestTypeView','StaffTypeView' ],
		function() {
			app = new AppRouter();
			Backbone.history.start();
		});