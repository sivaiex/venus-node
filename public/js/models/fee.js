window.Fee = Backbone.Model.extend({
	initialize : function() {

	},
  url : function() {
	return '/fees';
 },
 defaults : {
		_id : null,
		type : "",
		studyclass :{id:"",name:"",classType:""},
		amount:0,
		startDate:null,
		endDate:null,
		frequency:"",
		dueOn:"",
		status:""
	
	}
});
