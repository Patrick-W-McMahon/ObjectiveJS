function HUD(){
	this.gameEngine;

	this.init = function(e){
		this.gameEngine = e;
	}
	
	this.update = function(){

	}
	
	this.draw = function(g){
		g.fillStyle = "black";
		g.font="12px Verdana";
		if(this.gameEngine.frameCount<100){
			g.fillText("Ready ",this.gameEngine.getDisplayWidth()/2,this.gameEngine.getDisplayHeight()/2);
		}else if(this.gameEngine.frameCount>100&&this.gameEngine.frameCount<130){
			g.fillText("GO!! ",this.gameEngine.getDisplayWidth()/2,this.gameEngine.getDisplayHeight()/2);
		}
		
	}

}