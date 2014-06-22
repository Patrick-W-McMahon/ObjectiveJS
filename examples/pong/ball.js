function Ball(){
	var gameEngine;
	var radius=2;
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
	
	this.update = function(){
		this.y = Math.findYofCircleByDegrees(this.y,speed,this.direction);
		this.x = Math.findXofCircleByDegrees(this.x,speed,this.direction);
	}
	
	this.draw = function(g){
		g.fillStyle = "black";
		g.fillRect(this.x,this.y,radius*2,radius*2);
	}
}