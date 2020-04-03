function tentukanDeretAritmatika(arr) {
  var result = "";

  var pola = arr[1] - arr[0];

  // Check the ratio of the remaining
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != pola) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
