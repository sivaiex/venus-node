window.StaffType = Backbone.Model.extend({
	initialize : function() {

	},
  url : function() {
	return '/staffTypes';
 },
 defaults : {
		_id : null,
		name : "",
		description : ""

	}
});
