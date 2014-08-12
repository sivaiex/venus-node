window.Subject = Backbone.Model.extend({
	initialize : function() {

	},
  url : function() {
	return '/subjects';
 },
 defaults : {
		_id : null,
		name : "",
		description : ""

	}
});
