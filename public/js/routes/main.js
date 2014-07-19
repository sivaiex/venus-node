var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "students"	        : "students",
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

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    },
	
	students: function(page) {
		var p = page ? parseInt(page, 10) : 1;
        var studentList = new StudentCollection();
        studentList.fetch({success: function(){
            $("#content").html(new StudentListView({model: studentList, page: p}).el);
        }});
        this.headerView.selectMenuItem('home-menu');
    },

});


utils.loadTemplate(['HomeView', 'HeaderView', 'WineView', 'WineListItemView', 'AboutView','StudentListView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});