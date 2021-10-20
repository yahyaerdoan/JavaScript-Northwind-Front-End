console.log("**----------- İntro ------**");
//Saf Javascript dosya bazlı bir yapıdır. Dosyalar yukarıdan aşağı taranır.
//Değişken tanımlar kullanılabilecek var let const

var number = 10;
var number = "Yahya"; //Var tip güvenli olmadığı için araya giren değeri okudu
console.log(number);

let student = { id: 2, name: "yahya" }; //object notation ** JSON ( JavaScript Object Notation )
console.log(student);

function save(puan = 10, ogrenci) {
  //Default parametreyi herzaman sona yazmak gerekir. Eğer öne yazarsak atanmayan nesneyi bulamaz
  console.log(ogrenci.name + " : " + puan);
}
save(undefined, student); //parametrenin başına değer verirsek sonucu almış oluruz fakat doğru işlem olmaz. Undefined göndermek gerekir. Doğru atama oldu ama default parametreyi yazdırır.

let person = ["Ali", "Veli", "Yahya"];
console.log(person);

let persons = [
  person,
  { id: 1, name: "Ali" },
  { id: 2, name: "Veli" },
  { id: 3, name: "Yahya" },
  { id: 4, lastname: "Erdoğan" },
  "Uşak",
];
console.log(persons);


// Rest Operatörü in JavaScript
// Params in C#
// VarArgs in Java

let showProducts = function name(id, ...products) { //...products hali hazırda veri tutan bir arraydır.
    console.log(id)
    console.log(products[0])   // arraya index no verirsek sadece o elamanı getirir.
}
showProducts(15, ["a", "b", "c"]) //parametre değerlerini yeniden array içine alabiliriz. Array içim-nde array olur.