Function.prototype.Inherits = function(parent){
	this.prototype = new parent();
	this.prototype.constructor = this;
};

Object.include = function(file) {
	var e=window.document.createElement('script');
	e.setAttribute('src',file);
	window.document.body.appendChild(e);
};

Object.replaceWithValid = function(testValue,defaultValue){
	if(testValue==undefined||testValue==null){
		return defaultValue;
	}
	return testValue;
};

Object.isValidVar = function(testValue){
	if(testValue==undefined||testValue==null){
		return false;
	}else{
		return true;
	}
};

Object.functionTestExe = function(func){
	if(typeof(func) == "function"){
		func();
	}
};

Object.functionTestExeElse = function(func,el){
	if(typeof(func) == "function"){
		func();
	}else{
		el();
	}
}

Object.isNumber = function() {
	return !isNaN(parseFloat(this)) && isFinite(this);
};

Object.thisOrThat = function(a,b){
	return (typeof a === "undefined")? a : b;
};

Object.thisOrThatInObj = function(obj,a,b){
	return (a in obj)? obj[a] : b;	
};
