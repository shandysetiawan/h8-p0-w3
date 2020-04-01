// function pasanganTerbesar(num) {
//   var string = String(num);
//   var temp = "";
//   var result = 0;

//   for (var i = 0; i < `${num}`.length; i++) {
//     for (var j = 0; j < `${num}`.length - 1; j++) {
//       if (string[j] < string[j + 1]) {
//         var temp = string[j + 1];
//         string[j + 1] = string[j];
//         string[j] = temp;
//       }
//     }
//   }
//   return string;
// }

// console.log(pasanganTerbesar(641573));

var num = 641573;
var string = String(num);

string[].sort();

console.log(string);
