function DOM(){

	this.status = function(f){/in/.test(document.readyState)?setTimeout('this.status('+f+')',9):f()};
	this.OnReady = function(f){
		document.addEventListener('DOMContentLoaded',f);
	}
	
	this.getId = function(i){
		return document.getElementById(i);
	}
};