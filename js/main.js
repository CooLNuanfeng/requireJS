require.config = {

};

require(['dialog','animate'],function(D,A){
	var dialog = new D.Dialog();
	var animate = new A.Animate();

	dialog.alert();
	alert(animate.name);
});