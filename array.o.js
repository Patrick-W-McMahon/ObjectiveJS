Array.randomSelect = function(){
	return this[Math.randomNumberRange(0,this.length-1)];
};

Math.searchHaystack = function(needle){
	for(var x=0;x<this.length;x++){
		if(needle == this[x]){
			return x;
		}
	}
	return false;
};
