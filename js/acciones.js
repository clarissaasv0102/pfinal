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
	        alert('message:Clarissa_Sanchez_Victoria-Tutorial DAW');
});
	},false); // cierre deviceready
}); //cierre del ready