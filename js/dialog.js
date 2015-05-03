define(['jquery'],function($){
	function Dialog(){
		//this.name = "dialog";
		this.config = {
			width: 500,
			height: 300,
			y : 50,
			content : '',
			handerConfirm : null,
			handerClose : null
		};
	}

	Dialog.prototype = {
		constructor : 'Dialog',
		alert : function(cfg){

			var config = $.extend(this.config,cfg);
			
			var $dialogBox = $('<div class="win_dialogBox">'+config.content+'</div>');
				$dialogBox.appendTo('body');
			var $dialog_btn = $('<input type="button" class="win_dialogConfirm" value="确定"/>');
			var $dialog_close = $('<div class="win_dialogClosed">×</div>');
				$dialog_btn.appendTo($dialogBox);
				$dialog_close.appendTo($dialogBox);

				//关闭按钮
				$dialog_close.click(function() {
					config.handerClose && config.handerClose();
					$dialogBox.remove();
				});
				//确认按钮
				$dialog_btn.click(function() {
					config.handerConfirm && config.handerConfirm();
					$dialogBox.remove();
				});

				$dialogBox.css({
					width : config.width,
					height : config.height,
					left: config.x || ($(window).innerWidth() - config.width)/2+'px',
					top : config.y || ($(window).innerHeight() - config.height)/2+'px'
				});
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