var Students = Backbone.Collection.extend({

	model : app.Student,

	initialize : function(models, options) {
	},

	url : function() {
		return '/students';
	}

});
