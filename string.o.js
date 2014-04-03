

String.strReplaceNthSub(needle, replacement, occurrence){
  var arr = this.split(needle);
  if(occurrence < arr.length){
    arr[occurrence - 1] += replacement + arr[occurrence];
    arr[occurrence].unset();
    this = arr.join();
  }
  return this;
}
