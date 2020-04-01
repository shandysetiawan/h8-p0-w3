// function palindrome(kata) {
var temp1 = "";
var temp2 = "";
var result = "";
var kata = "kasur rusak";

for (var i = 0; i < kata.length; i++) {
  if (kata[i] >= "a" && kata[i] <= "z") {
    var temp1 = temp1 + kata[i];
  }
}

for (var j = kata.length - 1; j >= 0; j--) {
  if (kata[j] >= "a" && kata[j] <= "z") {
    var temp2 = temp2 + kata[j];
  }
}
if (temp1 === temp2) {
  console.log(true);
} else {
  console.log(false);
}

//     return
// }
