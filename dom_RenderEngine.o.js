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
      var dataType;
      if(elm.hasAttribute("type")){
        dataType = elm.getAttribute("type").toLowerCase();
      }else{
        dataType = elm.getAttribute("src").split(".");
        dataType = dataType[dataType.length-1];
        switch(dataType.toLowerCase()){
          case "js":
            dataType = "javascript";
          break;
          case "css":
            dataType = "css";
          break;
          default:
          case "html":
          case "htm":
          case "xhtml":
            dataType = "html";
          break;
        }
      }
      switch(dataType){
        case "javascript":
          //get external javascript and add it to the page. 
        break;
        case "css":
          //get external css and add it to the page.
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
                  var doc = xmlhttp.responseText;
                  var domElms = doc.body.childNodes;
                  for(var i=0; i<domElms.length; i++){
                    domElms[i].parentNode.insertBefore(elm, domElms[i]);
                  }
                  elm.parentNode.removeChild(elm);
               }else if(xmlhttp.status == 400){
                  console.log('There was an error 400')
               }else{
                   console.log('something else other than 200 was returned')
               }
              }
            }
            xmlhttp.open("GET", elm.getAttribute("src"), true);
            xmlhttp.send();
        break;
      }
    }
  }
  
})();
