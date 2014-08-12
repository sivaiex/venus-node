window.HomeView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },
    
    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        "click .signin"   : "beforeSignin"
    },
    beforeSignin: function (){
    	
    	alert(this.model.get("email"));
    	var authenticated = true;
    	// Start history
        //Backbone.history.start();
        if(authenticated) {
    	   app.navigate('admnDashboard',true);
        }else{
        	
        }
    	
    	
    }

});