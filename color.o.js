/*
* The Color object holds many color methods for changing the value
* of a given color.
*/
function Color(){

	this.shadeHexColor = function(color, percent) {   
		var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
		return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
	}
	
	this.blendHexColors = function(c0, c1, p) {
		var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
		return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
	}
	
	this.shadeRGBColor = function(color, percent) {
		var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
		return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
	}

	this.blendRGBColors = function(c0, c1, p) {
		var f=c0.split(","),t=c1.split(","),R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
		return "rgb("+(Math.round((parseInt(t[0].slice(4))-R)*p)+R)+","+(Math.round((parseInt(t[1])-G)*p)+G)+","+(Math.round((parseInt(t[2])-B)*p)+B)+")";
	}
	
}
