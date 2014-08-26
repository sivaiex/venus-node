window.FeeTypeView = Backbone.View.extend({

	initialize : function() {
		this.render();

	},

	render : function() {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;

	},
	events : {
		"click #save" : "saveFeeType"
	},

	saveFeeType : function(e) {
		var id = this.$('input#id').val();
		var name = this.$('input#name').val();
		var description = this.$('input#description').val();
		this.model.set({
			"name" : name
		});
		this.model.set({
			"id" : id
		});
		this.model.set({
			"description" : description
		});
		this.model.save();
	},
	allEventFunctions : function() {

	}

});