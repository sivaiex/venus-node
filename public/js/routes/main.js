var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "students"	        : "students",
        "admnDashboard"	    : "admnDashboard",
        "about"             : "about"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    home: function (id) {
    	var signin = new Signin();
    	$('#content').html(new HomeView({model: signin}).el);
      
    },
    
    admnDashboard: function (id) {
    	
    	$('#content').html(new AdminDashboardView().el);
      
    },

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    },
	
	students: function(page) {
		
    },

});


utils.loadTemplate(['HomeView', 'HeaderView', 'AboutView','AdminDashboardView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});