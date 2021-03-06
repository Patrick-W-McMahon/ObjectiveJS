String.strReplaceNthSub = function(needle, replacement, occurrence){
  var arr = this.split(needle);
  if(occurrence < arr.length){
    arr[occurrence - 1] += replacement + arr[occurrence];
    delete arr[occurrence];
    this = arr.join();
  }
  return this;
}


String.subStringCount = function(subString,step){
  if(step==null||step==undefined||step==0){
    step=subString.length;
  }
  if(subString.length==0){
    return 0;
  }
  var pos = 0;
  var count = 0;
  while(true){
    pos = String.indexOf(subString,pos);
    if(pos>=0){
      count++;
      pos+=step;
    }else break;
  }
  return count;
}
