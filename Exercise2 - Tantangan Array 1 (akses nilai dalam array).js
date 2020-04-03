function balikString(string) {
  var temp = "";
  for (var i = string.length - 1; i >= 0; i--) {
    temp += string[i];
  }
  return temp;
}

//TEST CASE
console.log(balikString("hello world!"));
