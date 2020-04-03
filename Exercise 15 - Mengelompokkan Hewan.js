function groupAnimals(animals) {
  var arrLuar = [];

  for (var i = 0; i < animals.length; i++) {
    for (var j = 0; j < animals.length - 1; j++) {
      if (animals[j] > animals[j + 1]) {
        var temp = animals[j + 1];
        animals[j + 1] = animals[j];
        animals[j] = temp;
      }
    }
  }

  var arrDalam = [animals[0]];
  for (var k = 0; k < animals.length - 1; k++) {
    if (animals[k][0] === animals[k + 1][0]) {
      arrDalam.push(animals[k + 1]);
    } else {
      arrLuar.push(arrDalam);
      arrDalam = [];
      arrDalam.push(animals[k + 1]);
    }
  }
  arrLuar.push(arrDalam);
  return arrLuar;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
