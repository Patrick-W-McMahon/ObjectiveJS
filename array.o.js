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

 /*
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
        for (var i = 1; i < tl; i++) {
            if (temp[i] < pivot) {
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

*/
 
/*
Array.mergeSort = function(){
    if (this.length < 2)
        return this;

    var middle = parseInt(this.length / 2);
    var left   = this.slice(0, middle);
    var right  = this.slice(middle, this.length);
    this = this.merge(this.mergeSort(left), this.mergeSort(right));
    return this;
}
 
Array.merge = function(left, right){
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}
*/

Array.prototype.clear = function(){
	while(this.length>0){
		this.pop();
	}
	return 0;
};

Array.prototype.move = function (old_index, new_index) {
	if (new_index >= this.length) {
		var k = new_index - this.length;
		while ((k--) + 1) {
			this.push(undefined);
		}
	}
	this.splice(new_index, 0, this.splice(old_index, 1)[0]);
};
