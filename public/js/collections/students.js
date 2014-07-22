window.Students = Backbone.Collection.extend({

	model :Student,

	initialize : function(models, options) {
	},

	url : function() {
		return '/students';
	}

});
