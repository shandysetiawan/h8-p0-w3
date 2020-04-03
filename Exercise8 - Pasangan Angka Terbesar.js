function pasanganTerbesar(num) {
  var string = num.toString();

  arrTampung = [];

  for (var i = 0; i < string.length - 1; i++) {
    var temp = "";
    temp += string[i] + string[i + 1];
    arrTampung.push(temp);
  }

  for (var i = 0; i < arrTampung.length; i++) {
    for (var j = 0; j < arrTampung.length - 1; j++) {
      if (arrTampung[j] < arrTampung[j + 1]) {
        var temp = arrTampung[j + 1];
        arrTampung[j + 1] = arrTampung[j];
        arrTampung[j] = temp;
      }
    }
  }
  return arrTampung[0];
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
