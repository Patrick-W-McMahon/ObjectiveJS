


String.strReplaceNthSub(needle, replacement, occurrence){
  var arr = this.split(needle);
  if(occurrence < arr.length){
    arr[occurrence - 1] += replacement + arr[occurrence];
    unset(arr[occurrence]);
    this = arr.join();
  }
  return this;
}
