// // function angkaPalindrome(num) {
// var num = 121;
// var temp1 = "";
// var temp2 = "";
// var angka = String(result);
// var result = "";

// for (var k = 0; k < 10; k++) {
//   var result = num + 1;
//   for (var i = 0; i < angka.length; i++) {
//     temp1 += angka[i];
//   }
//   for (var j = angka.length - 1; j >= 0; j--) {
//     temp2 += angka[j];
//   }
//   if (temp1 === temp2) {
//     console.log("ini udah palindrome");
//   } else {
//     result = num + 1;
//   }

//   console.log(result);
// }

// TEST CASES
// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001

// for (var k = 0; k !== true ; i++) {
//   tambah = num + 1;
//   if (String(tambah) == true) {

var num = 88428;

var string = String(num);

var temp1 = "";

var tempor = "";

for (var i = 0; i < string.length; i++) {
  temp1 += string[i];
}

for (var j = string.length; j >= 0; j--) {
  tempor += string[j];
}

console.log(temp1);
console.log(tempor);
