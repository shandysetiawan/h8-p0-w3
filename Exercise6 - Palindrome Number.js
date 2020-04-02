var num = 88428;

var string = String(num + 1);
var temp1 = "";
var temp2 = "";
var result = ";";
var string2 = "";
var palindrome = "";

for (var i = 0; i < string.length; i++) {
  temp1 += string[i];
}
for (var j = string.length - 1; j >= 0; j--) {
  temp2 += string[j];
}
if (temp1 == temp2) {
  result = string;
} else {
  var palindrome = false;
  while (palindrome === false) {
    num++;
    var string2 = String(num);
    result = string2;
  }
}

// console.log(result);
