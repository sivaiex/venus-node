window.TestType = Backbone.Model.extend({
	initialize : function() {

	},
  url : function() {
	return '/testTypes';
 },
 defaults : {
		_id : null,
		name : "",
		description : ""

	}
});
