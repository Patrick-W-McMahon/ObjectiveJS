function DOM(){

	this.State = function(f){/in/.test(document.readyState)?setTimeout('this.ready('+f+')',9):f()};
};