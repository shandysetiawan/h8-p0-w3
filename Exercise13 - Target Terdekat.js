function targetTerdekat(arr) {
  var result = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "o") {
      var circle = 1 + i;
    } else if (arr[i] == "x") {
      var cross = 1 + i;
    }
  }

  for (var j = arr.length; j >= 0; j--) {
    if (arr[j] == "x") {
      var cross2 = 1 + j;
    }
  }

  var jarak1 = Math.abs(cross2 - circle);
  var jarak2 = Math.abs(cross - circle);

  if (jarak1 < jarak2) {
    result = jarak1;
  } else if (jarak2 < jarak1) {
    result = jarak2;
  } else {
    result = 0;
  }

  return result;
}
// // TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
