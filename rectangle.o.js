function Rectangle(cx,cy,ch,cw){
	if(isNaN(cx)||isNaN(cy)||isNaN(ch)||isNaN(cw)){
		return false;
	}
	this.x=cx;
	this.y=cy;
	this.height=ch;
	this.width=cw;
	
	this.Intersect = function(rect){
		if (rect.x < this.x + this.width && this.x < rect.x + rect.width && rect.y < this.y + this.height){
			return this.Y < rect.Y + rect.Height;
		}else{
			return false;
		}
	};
	
	this.insideRect = function(rect){
		if(this.x>rect.x&&this.y>rect.y&&this.x+this.width<rect.x+rect.width&&this.y+this.height<rect.y+rect.height){
			return true;
		}else{
			return false;
		}
	}:
	
};