window.FeeView = Backbone.View.extend({

	initialize : function() {
		this.render();

	},

	render : function() {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;

	},
	events : {
		"click .save" : "saveFee"
	},

	saveFee : function(e) {

		var name = this.$('input#name').val();
		var description = this.$('input#description').val();
		
		this.model.set({
			"name" : name
		});
		this.model.set({
			"description" : description
		});
		this.model.save();
	},
	allEventFunctions : function() {

	}

});