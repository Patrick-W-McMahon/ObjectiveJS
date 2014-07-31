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
      elm.onclick = "javascript:location.href='"+elm.getAttribute("href")+"';return false";
    }
    if(elm.tagName.toLowerCase()=="include"&&elm.hasAttribute("src")){
      switch(elm.getAttribute("type").toLowerCase()){
        case "javascript":
          
        break;
        case "css":
          
        break;
        default:
        case "html":
            var xmlhttp;
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }else{
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 ) {
               if(xmlhttp.status == 200){
                   document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
               }else if(xmlhttp.status == 400){
                  alert('There was an error 400')
               }else{
                   alert('something else other than 200 was returned')
               }
            }
            xmlhttp.open("GET", elm.getAttribute("src"), true);
            var doc = xmlhttp.send();
            var domElms = doc.body.childNodes;
            for(var i=0; i<domElms.length; i++){
              domElms[i].parentNode.insertBefore(elm, domElms[i]);
            }
            
        break;
      }
    }
  }
  
})();
