function Ball(){
	var gameEngine;
	this.radius=2;
	var x;
	var y;
	var direction;
	var speed=1;
	
	
	this.init = function(e){
		this.gameEngine = e;
		this.x = e.getDisplayWidth()/2;
		this.y = e.getDisplayHeight()/2; 
		this.direction = Math.randomNumberRange(0,360);
	}
	
	this.getAngle = function(pt3, pt2, pt1) {
		var dx1 = pt1.x - pt2.x;
		var dy1 = pt1.y - pt2.y;
		var dx2 = pt3.x - pt2.x;
		var dy2 = pt3.y - pt2.y;
		var a1 = Math.atan2(dy1, dx1);
		var a2 = Math.atan2(dy2, dx2);
		return parseInt((a2 - a1) * 180 / Math.PI + 360) % 360;
	}
	
	this.update = function(){
		var oldX=this.x;
		var oldY=this.y;
		this.y = Math.findYofCircleByDegrees(this.y,speed,this.direction);
		this.x = Math.findXofCircleByDegrees(this.x,speed,this.direction);
		if(this.x<0){
			this.x=0;
			var wallX = 0;
			var wallY = Math.findYofCircleByDegrees(this.y,speed,this.direction);
			this.direction = Math.AngleOfReflection(Math.angleOfTwoLines(this.x,this.y,wallX,wallY));
		}
		if(this.x+this.radius>this.gameEngine.getDisplayWidth()){
			var v=this.direction;
			var n=90;
			var u = (v*n/n*n)*n;
			var w=v-u;
			this.direction=w;
			//this.direction = 2 * (90 - this.direction) + 180;
		}
		if(this.y<0){
			this.y=0;
			var wallX = 0;
			var wallY = Math.findYofCircleByDegrees(this.y,speed,this.direction);
			this.direction = Math.AngleOfReflection(Math.angleOfTwoLines(this.x,this.y,wallX,wallY));
		}
		if(this.y+this.radius>this.gameEngine.getDisplayHeight()){
			var v=this.direction;
			var n=90;
			var u = (v*n/n*n)*n;
			var w=v-u;
			this.direction=w;
			//this.direction = 2 * (90 - this.direction) + 180;
		}
		var errorBuffer = 4;
		if(this.x<-errorBuffer||this.y<-errorBuffer||this.x>this.gameEngine.getDisplayWidth()+errorBuffer||this.y>this.gameEngine.getDisplayHeight()+errorBuffer){
			this.x = this.gameEngine.getDisplayWidth()/2;
			this.y = this.gameEngine.getDisplayHeight()/2; 
			this.direction = Math.randomNumberRange(0,360);
		}
	}
	
	this.draw = function(g){
		g.fillStyle = "black";
		g.fillRect(this.x,this.y,this.radius*2,this.radius*2);
	}
}