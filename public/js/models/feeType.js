window.FeeType = Backbone.Model.extend({
	initialize : function() {

	},
  url : function() {
	return '/feeTypes';
 },
 defaults : {
		_id : null,
		name : "",
		description : ""

	}
});
