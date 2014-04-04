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

 
Array.quickSort = function(){
    var stack = [this];
    var sorted = [];
    while (stack.length) {
        var temp = stack.pop(), tl = temp.length;
        if (tl == 1) {
            sorted.push(temp[0]);
            continue;
        }
        var pivot = temp[0];
        var left = [], right = [];
        for (var i = 1; i &lt; tl; i++) {
            if (temp[i] &lt; pivot) {
                left.push(temp[i]);
            } else {
                right.push(temp[i]);
            }
        }
        left.push(pivot);
        if (right.length)
            stack.push(right);
        if (left.length)
            stack.push(left);
    }
    this=sorted;
}

