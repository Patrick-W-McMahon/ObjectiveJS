function GameEngine(){
	this.objects=[];
	this.loopState;
	this.loopId;
	this.objectIndexCounter=0;
	this.display;
	this.context='2d';
	gameEngineThis = this;
	this.displayDomId;
	this.requestID;
	this.keysDown=[];
	this.keysUp=[];
	this.keysPressed=[];
	this.engineMode="live";
	
	this.update = function(){
		for(var x=0;x<this.objects.length;x++){
			if(typeof(this.objects[x].update)==='function'){
				this.objects[x].update();
			}
			if(this.inputActions()){
				if(typeof(this.objects[x].input)==='function'){
					this.objects[x].input(this.keysDown,this.keysPressed,this.keysUp);
				}
			}
		}
		this.clearKeys();
	}
	
	this.engineLog = function(message){
		if(this.engineMode=="test"){
			console.log("Game Engine: "+message);
		}
	}
	
	this.inputActions = function(){
		if(this.keysDown.length>0||this.keysPressed.length>0||this.keysUp.length>0){
			return true;
		}else{
			return false;
		}
	}
	
	this.clearKeys = function(){
		this.keysDown=[];
		this.keysPressed=[];
		this.keysUp=[];
	}
	
	window.onkeydown = function(e){
		if(gameEngineThis.loopState){
			gameEngineThis.engineLog("Key Down "+e.keyCode);
			gameEngineThis.engineLog("key index "+gameEngineThis.keysDown.indexOf(e.keyCode));
			if(gameEngineThis.keysDown.indexOf(e.keyCode)==-1){
				gameEngineThis.engineLog("key code added");
				gameEngineThis.keysDown.push(e.keyCode);
			}
		}
		
	};
	
	this.setDisplay = function(canvas){
		this.displayDomId = document.getElementById(canvas);
		this.display = document.getElementById(canvas).getContext(this.context);
	}
	
	this.addObject = function(o){//pass object
		this.objects.push(o);
		if(this.objects.lenth<=this.objectIndexCounter){
			this.objects[this.objects.length-1].id=this.objectIndexCounter;
		}else{
			this.objects[this.objects.length-1].id=this.objects.length;
		}
		this.objectIndexCounter++;
		return this.objects[this.objects.length-1].id;//return the objects id
	}
	
	this.purgeObjects = function(){
		this.objects = [];
	}
	
	this.removeObject = function(id){//pass id of object
		this.removeObjectByIndex(this.getIndexOfObject(id));
	}
	
	this.getIndexOfObject = function(v){//pass id of object
		var index = -1;
		for(var i=0;i<this.objects.length;i++){
			if(this.objects[i].id === v){
				index = i;
				break;
			}
		}
		return index;
	}
	
	this.removeObjectByIndex = function(i){//pass index of object
		this.objects.splice(i,1);
	}
	
	this.getDisplayHeight = function(){
		return this.displayDomId.height;
	}
	
	this.getDisplayWidth = function(){
		return this.displayDomId.width;
	}
	
	this.clearScreen = function(g){
		g.clearRect(0,0,g.canvas.width,g.canvas.height);
		//g.clearRect (0,0,this.getDisplayWidth(),this.getDisplayHeight());
	}
	
	this.render =  function(g){
		this.clearScreen(g);
		for(var x=0;x<this.objects.length;x++){
			if(typeof(this.objects[x].draw)==='function'){
				this.objects[x].draw(this.display);
			}else if(typeof(this.objects[x].paint)==='function'){
				this.objects[x].paint(this.display);
			}
		}
	}
	
	this.start = function(){
		this.loopState=1;
		this.frame();
	}
	
	this.pause = function(){
		this.loopState=0;
	}
	
	this.stop = function(){
		this.loopState=0;
		this.purgeObjects();
		this.render(this.display);
	}
	
	this.frame = function(){
		gameEngineThis.update();	
		gameEngineThis.render(gameEngineThis.display);
		if(gameEngineThis.loopState){
			gameEngineThis.requestID = window.requestAnimationFrame(gameEngineThis.frame);
		}
	}
	
};