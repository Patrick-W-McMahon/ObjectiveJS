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
	var x=10;
	var y=10;
	var speed=1;
	
	//this.prototype.ObjectType = "Player";
	
	this.setPlayerType = function(t){
		this.type=t;
	};

	this.input = function(keyDown,keyPress,KeyUp){
		if(keyDown.indexOf(40)){//up key
			console.log("up");
			y=y-speed;
		}
		if(keyDown.indexOf(38)){//down key
			console.log("down");
			y=y+speed;
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