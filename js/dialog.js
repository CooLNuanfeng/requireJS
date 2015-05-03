define(function(){
	function Dialog(){
		//this.name = "dialog";
	}

	Dialog.prototype = {
		constructor : 'Dialog',
		alert : function(){
			console.log('dialog alert');
		},

		confirm : function(){
			console.log('dialog confirm');
		},

		prompt : function(){
			console.log('dialog prompt');
		}
	};


	return {
		Dialog: Dialog
	};
});