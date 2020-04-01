var list = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];

function dataHandling2() {
  const temp = [ID, nama, asal, kota, tanggal, lahir, hobi];

  return list;
}

console.log(dataHandling2());

// for (var i = 0; i < list.length; i++) {
//   list2 = list2 + list[i];
// }

// console.log(list2);

// list.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung"),
//   list.splice(4, 1, "Pria", "SMA Internasional Metro");

// console.log(list);

// var list2 = [
//   "0001",
//   "Roman Alamsyah",
//   "Bandar Lampung",
//   "21/05/1989",
//   "Membaca"
// ];

// var ttl = list2[3];

// var ttl2 = 0;

// ttl2 = ttl.split("/", 3);

// switch (Number(ttl2[1])) {
//   case 01: {
//     console.log(`Januari`);
//     break;
//   }
//   case 02: {
//     console.log(`Februari`);
//     break;
//   }
//   case 03: {
//     console.log(`Maret`);
//     break;
//   }
//   case 04: {
//     console.log(`April`);
//     break;
//   }
//   case 05: {
//     console.log(`Mei`);
//     break;
//   }
//   case 06: {
//     console.log(`Juni`);
//     break;
//   }
//   case 07: {
//     console.log(`Juli`);
//     break;
//   }
//   case 08: {
//     console.log(`Agustus`);
//     break;
//   }
//   case 09: {
//     console.log(`September`);
//     break;
//   }
//   case 10: {
//     console.log(`Oktober`);
//     break;
//   }
//   case 11: {
//     console.log(`November`);
//     break;
//   }
//   case 12: {
//     console.log(`Desember`);
//     break;
//   }
// }

// ttl2.sort(function(value1, value2) {
//   return value2 - value1;
// });

// console.log(ttl2);

// console.log(ttl2.join("-"));

var list2 = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];
var nama = list2[1];

nama.slice(0, 16);
// console.log(nama);
