window.FeeType = Backbone.Model.extend({
	initialize : function() {

	},
	urlRoot : function() {
		return '/feeTypes';
	},
	defaults : {
		id : null,
		name : "",
		description : ""

	}
});
