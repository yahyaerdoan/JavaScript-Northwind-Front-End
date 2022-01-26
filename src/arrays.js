/* let sayiList =[];
sayiList = new Array();
sayiList = Array();
sayiList =[1,2,3,4];
new Array(5); [beşelemanlıboşarray] */

/* let sayiList =[1,2,3,4,5];
let sayiList2 = sayiList;
sayiList2.push(6);
console.log(sayiList2) */

/* let sayiList =[1,2,3,4,5];
let sayiList2 = [...sayiList];
sayiList2.push(6);
console.log(sayiList)
console.log(sayiList2) */
/* 
let sayiList = [1, 2, 3, 4, 5];
let sayiList2 = [6, 7, 8, 9, 10];
let sayiList3 = [0, ...sayiList, ...sayiList2];
sayiList3.push(11);
console.log(sayiList);
console.log(sayiList2);
console.log(sayiList3);
console.log(Math.min(...sayiList3));

//map transformasyon işlemi yeniden referans oluşturup sonuç döndürüyor
let sayilist = [1,2,3,4,5];
let sayilistcarpim = [...sayilist.map((x)=> x*3)];
console.log(sayilistcarpim); */

// referans değişikliği yapılamadı

/* const fruits = [
    {name: 'elma', count: 3},
    {name: 'şeftali', count: 6},
    {name: 'havuç', count: 7},
];
let copyofruits = [...fruits];
copyofruits.push({name: 'çilek', count: 4});

fruits[0].count = 5,fruits[0].name = 'elmas' ;

console.log('original fruits:', fruits)
console.log('copyfruits fruits:', copyofruits) */

// yeniden referans oluşturuldu.
const fruits = [
  { name: "elma", count: 3 },
  { name: "şeftali", count: 6 },
  { name: "havuç", count: 7 },
];
let copyofruits = [
  ...fruits.map((referenceOfIndex) => {
    return { name: referenceOfIndex.name, count: referenceOfIndex.count };
  }),
];
copyofruits.push({ name: "çilek", count: 4 });

(fruits[0].count = 5), (fruits[0].name = "elmas");

console.log("original fruits:", fruits);
console.log("copyfruits fruits:", copyofruits);
/* 
let sayiList =[1,2,3,4,5];
let sayiList2 = sayiList;
sayiList2.unshift(6); // başına ekleme yapar. fakat performans için iyi değildir. index kaydırır maliyetli iş
console.log(sayiList2) */

/* let sayiList =[1,2,3,4,5];
let sayiList2 = sayiList;
let removedItem = sayiList2.pop(); // sondaki indexsi çıkartır. değişkenle silinen elemanı görebiliriz
console.log(removedItem) */

/* let sayiList =[1,2,3,4,5];
let sayiList2 = sayiList;
sayiList2.shift(); // baştan index çıkartır.
console.log(sayiList2)  */

/* let sayiList =[1,2,3,4,5];
console.log(sayiList.splice(1,3)); // belirtilen indexleri getirir. */

let sayiList = [1, 2, 3, 4, 5];
let newlist = sayiList.slice(2);
console.log(newlist); // belirtilen indexten sonrasını getirir.

// array birleştirme yeni referansa atar.
let ilkbeşsayi = [1, 2, 3, 4, 5];
let sonbeşsayi = [6, 7, 8, 9, 10];
let toplam = [...ilkbeşsayi, ...sonbeşsayi];
console.log(toplam);
console.log(toplam.indexOf(2));
console.log(toplam.lastIndexOf(9));
console.log(toplam.find((referance) => referance === 4));
console.log(toplam.find((referance) => referance > 4));
console.log(toplam.findIndex((referance) => referance > 2));
console.log(toplam.includes(12)); // var mı yok mu kontrol eder.
console.log(toplam.push(11));
console.log(toplam.map((x) => x.toString())); // stringe dönüştürür.
console.log(toplam.sort()); //sıralama yapar
console.log(toplam.filter((x) => x > 5)); //büyükleri getirir
console.log(
  toplam.reduce((pv, cv) => {
    return pv + cv;
  })
);
console.log(toplam.reduce((pv, cv) => pv + cv, 1)); //sayıların toplamını döndürür.

let userlist = "yahya, kerem, berk";
console.log(userlist.split(",").join(" - "));

// set, setler o anlık veri alır key value almaz.
// uniquelik sağlar, performans sağlar
function adduser() {
  let userlist = new Set();
  userlist.add(1);
  userlist.add(2);
  userlist.add(3);

  //kontrol eder
  if (!userlist.has(4)) {
    userlist.add(4);
  }

  console.log(userlist);
}
adduser();

// map key ve value değişimi yapılabilir
// uniclik sağlayan bir yapı hemm de sıralı bir yapı sunar
function adduser() {
  let userlist = new Map();
  userlist.set(1, 1);
  userlist.set(2, "1");
  userlist.set(3, "yahya");
  //console.log(userlist.get(1));
  //console.log(userlist.delete(1));

  console.log(userlist);
}
adduser();
