window.StudentListView = Backbone.View.extend({
	
	
    initialize: function () {
        this.render();
    },

    render: function () {
    	alert("before rendering");
    	
        var students = this.model;
        var len = students.length;
        alert("before rendering:"+len);
        
        $(this.el).html(this.template(this.model.toJSON()));


        return this;
    }
});


