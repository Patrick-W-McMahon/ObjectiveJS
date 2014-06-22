function Player(s,c,n){
	var side=s;
	var color=c;
	var score=0;
	var name=n;
	var type;
	var count=50;
	var defaultPaddleLength=20;
	var paddleLength=defaultPaddleLength;
	var paddleThickness=4;
	var x=3;
	var y=10;
	var speed=2;
	var gameEngine;
	
	//this.prototype.ObjectType = "Player";
	
	this.setPlayerType = function(t){
		this.type=t;
	};
	
	this.init = function(e){
		this.gameEngine = e;
	}

	this.input = function(keyDown,keyPress,KeyUp){
		if(keyDown.indexOf(40)){//up key
			console.log("up");
			y=y-speed;
			if(y<0){
				y=0;
			}
		}
		if(keyDown.indexOf(38)){//down key
			console.log("down");
			y=y+speed;
			if(y+paddleLength>this.gameEngine.getDisplayHeight()){
				y=this.gameEngine.getDisplayHeight()-paddleLength;
			}
		}
	}
		
	//this.update = function(){
	//	window.onkeydown = function(){
	//		x++;
	//	};
	//}
	
	this.draw = function(g){
		g.fillStyle = "rgb(200,0,0)";
		g.fillRect(x,y,paddleThickness,paddleLength);
	}
	
	

};