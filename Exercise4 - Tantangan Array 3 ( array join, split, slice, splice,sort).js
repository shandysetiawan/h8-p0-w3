function dataHandling2(list) {
  list.splice(1, 1, `${list[1]} Elsharawy`);
  list.splice(2, 1, `Provinsi ${list[2]}`);
  list.splice(list.length - 1, 1, "Pria", "SMA Internasional Metro");

  console.log(list);

  var date = list[3].split("/");
  var month = "";

  switch (Number(date[1])) {
    case 01: {
      month = "Januari";
      break;
    }
    case 02: {
      month = "Februari";
      break;
    }
    case 03: {
      month = "Maret";
      break;
    }
    case 04: {
      month = "April";
      break;
    }
    case 05: {
      month = "Mei";
      break;
    }
    case 06: {
      month = "Juni";
      break;
    }
    case 07: {
      month = "Juli";
      break;
    }
    case 08: {
      month = "Agustus";
      break;
    }
    case 09: {
      month = "September";
      break;
    }
    case 10: {
      month = "Oktober";
      break;
    }
    case 11: {
      month = "November";
      break;
    }
    case 12: {
      month = "Desember";
      break;
    }
    default: {
      month = "masukan bulan angka-12";
      break;
    }
  }
  console.log(month);

  date.sort(function(value1, value2) {
    return value2 - value1;
  });

  console.log(date);

  console.log(date.join("-"));

  var name = list[1];
  var cutName = name.slice(0, 14);

  console.log(cutName);
}

//TEST CASE
var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];

dataHandling2(input);
