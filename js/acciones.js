// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#come').tap(function(){
			navigator.notification.vibrate(100);
		}); //tap sonar
		$('#cua').tap(function(){
			navigator.notification.vibrate(90);
		}); //tap vibrar
		$('#come').on('click',function(){
	      navigator.notification.alert("Clarissa Sanchez Victoria-4toF Tutorial DAW");
});
	},false); // cierre deviceready
}); //cierre del ready