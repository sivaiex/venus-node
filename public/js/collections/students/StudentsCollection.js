define([
  'underscore',
  'backbone',
  'models/students/StudentModel'
], function(_, Backbone, ContributorModel){

  var StudentsCollection = Backbone.Collection.extend({
      
      model: StudentModel,

      initialize : function(models, options) {},
      
      url : function() {
        return '/students';
      }
    
     
  });

  return StudentsCollection;

});