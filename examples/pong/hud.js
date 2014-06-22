function HUD(){
	this.gameEngine;
	this.frameCount;

	this.init = function(e){
		this.gameEngine = e;
	}
	
	this.update = function(){
		this.frameCount = this.gameEngine.frameCount;
	}
	
	this.draw = function(g){
		g.fillStyle = "black";
		g.font="12px Verdana";
		g.fillText("Frames "+this.frameCount,10,50);
	}

}