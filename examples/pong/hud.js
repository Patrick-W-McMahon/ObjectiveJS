function HUD(){
	this.gameEngine;
	this.playerOneScore=0;
	this.playerTwoScore=0;

	this.init = function(e){
		this.gameEngine = e;
	}
	
	this.update = function(){

	}
	
	this.EventLisener = function(e){
		var pointEvent = this.gameEngine.getEventInStack("point",true);
		if(pointEvent){
			if(pointEvent.player==1){
				this.playerOneScore++;
			}else{
				this.playerTwoScore++;
			}
		}
	}
	
	this.draw = function(g){
		g.fillStyle = "black";
		g.font="12px Verdana";
		if(this.gameEngine.frameCount<100){
			g.fillText("Ready ",this.gameEngine.getDisplayWidth()/2,this.gameEngine.getDisplayHeight()/2);
		}else if(this.gameEngine.frameCount>100&&this.gameEngine.frameCount<130){
			g.fillText("GO!! ",this.gameEngine.getDisplayWidth()/2,this.gameEngine.getDisplayHeight()/2);
		}else{
			g.font="8px Verdana";
			g.fillText(""+this.playerOneScore,10,10);
			g.fillText(""+this.playerTwoScore,this.gameEngine.getDisplayWidth()-15,9);
		}
		
	}

}