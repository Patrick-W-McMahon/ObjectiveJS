function DOM(){

	this.status = function(f){/in/.test(document.readyState)?setTimeout('this.status('+f+')',9):f()};
	this.OnReady = function(f){
		document.addEventListener('DOMContentLoaded',f);
	}
	
	this.getId = function(i){
		return document.getElementById(i);
	}
	
	this.getChildren(elm){
		return elm.childNodes;
	}
	
	this.findTags(tagName,elm){
		var results = [];
		(function traversNodes(tagName,elm){
    			var childNodes = elm.childNodes;
			for(var i=0; i<childNodes.length; i++) {
				if(childNodes[i].tagName.toLowerCase()==tagName.toLowerCase()){
					results.push(childNodes[i]);
				}
				if(childNodes[i].childNodes.length>0){
					traversNodes(childNodes[i]);	
				}
			}  
		})(tagName,elm);
	}
};
