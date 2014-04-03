/*
* miscellaneous functions
* By: Patrick W. McMahon
*
*/

Object.thisOrThat = function(a,b){
	return (typeof a === "undefined")? a : b;
};

Object.thisOrThatInObj = function(obj,a,b){
	return (a in obj)? obj[a] : b;	
};
