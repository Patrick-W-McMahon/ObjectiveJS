Function.prototype.Inherits = function(parent){
	this.prototype = new parent();
	this.prototype.constructor = this;
};

Object.prototype.Inherits = function(parent){
	this.prototype = new parent();
	this.prototype.constructor = this;
};

Function.prototype.extends = function(parent){
	this.prototype = new parent();
	this.prototype.constructor = this;
};

Object.prototype.extends = function(parent){
	this.prototype = new parent();
	this.prototype.constructor = this;
};

Object.include = function(file) {
	var e=window.document.createElement('script');
	e.setAttribute('src',file);
	window.document.body.appendChild(e);
};

Object.unset = function(){
	delete this;
};

Object.replaceWithValid = function(d){//pass default
	if(this==undefined||this==null){
		return d;
	}
	return this;
};

Object.isValidVar = function(){
	if(this==undefined||this==null){
		return false;
	}else{
		return true;
	}
};

Object.functionTestExe = function(){
	if(typeof(this) == "function"){
		this();
	}
};

Object.functionTestExeElse = function(e){
	if(typeof(this) == "function"){
		this();
	}else{
		e();
	}
}

Object.isNumber = function() {
	return !isNaN(parseFloat(this)) && isFinite(this);
};
