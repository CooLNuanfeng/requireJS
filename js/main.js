require.config = {
	path : {
		'jquery' : '../bower_components/jquery/dist/jquery.js'
	}
};

require(['jquery','dialog'],function($,D){
	var dialog = new D.Dialog();
	$('#dialog').click(function() {
		dialog.alert({
			title : '标题',
			y:100,
			content : 'Hello dialog is born',
			width : 400,
			height : 300,
			//drag : true,
			handerConfirm : function(){
				alert('you clicked sure');
			},
			handerClose : function(){
				alert('you clicked closed');
			}
		});
	});
	
});