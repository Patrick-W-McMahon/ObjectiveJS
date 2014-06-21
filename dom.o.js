function DOM(){

	this.State = function(f){/in/(document.readyState)?setTimeout(this.State,9,f):f()};
};