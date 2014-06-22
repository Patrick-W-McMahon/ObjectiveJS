var myDom = new DOM();
var myEngine = new GameEngine();
myEngine.engineMode="test";
//var testPlayer = new Player();
var gamePaused=0;
myDom.OnReady(function(){
	myEngine.setDisplay("screen");
	myDom.getId("newGameButton").addEventListener("click", function(){
		myEngine.stop();
		var playerOneId = myEngine.addObject(new Player("left","red","Player One"));
		myEngine.init();
		myEngine.start();
	}, false);
	myDom.getId("PauseButton").addEventListener("click", function(){
		if(gamePaused){
			myEngine.start();
			gamePaused=0;
		}else{
			myEngine.pause();
			gamePaused=1;
		}
		
	}, false);
	myDom.getId("quitButton").addEventListener("click", function(){
		myEngine.stop();
	}, false);
	
	
	
	
	
//	gameObjects.push(new Player("left","red","Player One"));
//	gameObjects[gameObjects.length-1].setPlayerType("player");
//	gameObjects.push(new Player("right","blue","Player Two"));
//	gameObjects[gameObjects.length-1].setPlayerType("computer");
	
	
});