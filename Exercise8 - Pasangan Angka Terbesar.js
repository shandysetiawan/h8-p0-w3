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

// var num = 641573;
// var string = String(num);

// string[].sort();

// console.log(string);

function pasanganTerbesar(num) {
  var string = String(num).split("");
  var length = string.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (string[j] > string[j + 1]) {
        //Swap the numbers
        var tmp = string[j]; //Temporary variable to hold the current number
        string[j] = string[j + 1]; //Replace current number with adjacent number
        string[j + 1] = tmp; //Replace adjacent number with current number
      }
    }
  }

  return string.toString().replace(/,/g, "");
}

console.log(pasanganTerbesar(641573));
