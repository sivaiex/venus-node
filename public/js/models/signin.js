var app = app || {};
app.Signin = Backbone.Model.extend({
	defaults : {
		_id : null,
		email : "test@test.com",
		password : "test123"

	}
});
