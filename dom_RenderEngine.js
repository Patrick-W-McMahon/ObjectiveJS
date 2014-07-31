(function DOM_Render_Engine() {

  (function traversDom(elm){
    var childNodes = elm.childNodes;
    for(var i=0; i<childNodes.length; i++) {
      renderElm(childNodes[i]);
      traversDom(childNodes[i]);
      
    }  
  })(document.body);

  function renderElm(elm){
    if(elm.hasAttribute("href")&&elm.tagName.toLowerCase()!=="a"){
      elm.onclick = "javascript:location.href='"+elm.getAttribute("href")+"'";
    }
  }
  
})();



