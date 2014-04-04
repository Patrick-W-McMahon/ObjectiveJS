Array.randomSelect = function(){
	return this[Math.randomNumberRange(0,this.length-1)];
};

Array.searchHaystack = function(needle){
	for(var x=0;x<this.length;x++){
		if(needle == this[x]){
			return x;
		}
	}
	return false;
};

Array.bubbleSort = function(){
	var swapped;
	do{
		swapped = false;
		for (var i=0; i < this.length-1; i++) {
			if (this[i] > this[i+1]) {
				var temp = this[i];
				this[i] = this[i+1];
				this[i+1] = temp;
				swapped = true;
			}
		}
	}while(swapped);
}
