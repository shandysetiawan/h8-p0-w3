function angkaPalindrome(num) {
  var result = "";

  var palindrome = false;
  while (palindrome == false) {
    num++;
    var string = String(num);
    var temp = "";

    for (var i = string.length - 1; i >= 0; i--) {
      temp += string[i];
    }
    if (string === temp) {
      palindrome = true;
    }
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
