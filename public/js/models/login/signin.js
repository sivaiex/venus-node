
define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var Signin = Backbone.Model.extend({
	  defaults: {
	        _id: null,
	        email: "test@test.com",
	        password: "test123"
	      
	    }
  });

  return Signin;

});

