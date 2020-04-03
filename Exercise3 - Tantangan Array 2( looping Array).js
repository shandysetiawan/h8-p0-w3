function dataHandling(input) {
  var list = input;
  var result = "";

  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list[i].length; j++) {
      if (j == 0) {
        result += `ID: ${list[i][j]} \n`;
      } else if (j == 1) {
        result += `Nama Lengkap: ${list[i][j]} \n`;
      } else if (j == 2) {
        result += `TTL: ${list[i][j]} ${list[i][j + 1]} \n`;
      } else if (j == 4) {
        result += `Hobi: ${list[i][j]}\n\n`;
      }
    }
  }
  return result;
}

//TEST CASE
console.log(
  dataHandling([
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ])
);
