Math.randomNumberRange = function(from,to){
	return Math.floor(Math.random() * (to - from + 1) + from);
};

Math.bigger = function(a,b){
	return (a>b)?a:b;
};

Math.smaller = function(a,b){
	return (a<b)?a:b;
};

Math.distance2Points = function(y1,x1,y2,x2) {
	var R = 1;
	var dY = (y2-x1) * Math.PI / 180;
	var dX = (x2-x1) * Math.PI / 180;
	var a = Math.sin(dY/2) * Math.sin(dY/2) +
		Math.cos(y1 * Math.PI / 180 ) * Math.cos(y2 * Math.PI / 180 ) *
		Math.sin(dX/2) * Math.sin(dX/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	return d;
};

Math.angleOfLineInRadians = function(y1,x1,y2,x2){
	return ((x2-x1)/(y2-y1));
};

Math.angleOfLineInDegrees = function(y1,x1,y2,x2){
	return Math.radiansToDegrees(Math.angleOfLineInRadians(y1,x1,y2,x2)); 
};

Math.calcDegree = function(a,b){
	return(a-b);	
};

Math.indicateQuadrant = function(y1,x1,y2,x2){
	switch(Math.calcDegree(x2,x1)+Math.calcDegree(y2,y1)){
		case 0:
			return "TOP_RIGHT";
		break;
		case 1:
			return "TOP_LEFT";
		break;
		case 2:
			return "BOTTOM_LEFT";
		break;
		case 3:
			return "BOTTOM_RIGHT";
		break;
	}
};

Math.getRadOfXYpoints = function(y1,x1,y2,x2){
	return Math.tan((x2-x1)/(y2-y1));
};

Math.distance2Obj = function(objA,objB){
	return distance2Points(objA.y,objA.x,objB.y,objB.x);
};

Math.radiansToDegrees = function(ra){
	return ra*(180/Math.PI);
};

Math.degreesToRadians = function(deg){
	return deg*(Math.PI/180);
};


Math.findXYofCircleByDegrees = function(xCenter,yCenter,radius,angle){
	var x = xCenter + radius * Math.cos(angle);
	var y = yCenter + radius * Math.sin(angle);
	return [x,y];
}

Math.findYofCircleByDegrees = function(yCenter,radius,angle){
	return yCenter + radius * Math.sin(angle);
}

Math.findXofCircleByDegrees = function(xCenter,radius,angle){
	return xCenter + radius * Math.cos(angle);
}

Math.reflection = function(x,y){
	var Val = [];
	Val[0] = x+Math.cos(0)-y+Math.sin(0);
	Val[1] = x+Math.sin(0)+y+Math.cos(0);
	return Val;
};

Math.AngleOfReflection = function(angleToWall){
	return 180 - angleToWall;
};

Math.dotProductOf2Points = function(ax,ay,bx,by){
	return (ax * bx)+(ay * by);
};

Math.dotProductOf2PointsObj = function(objA,objB){
	return (objA.x * objB.x)+(objA.y * objB.y);
};
