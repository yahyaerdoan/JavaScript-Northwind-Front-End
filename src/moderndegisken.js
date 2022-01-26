/* var sayi = 1;
if (2 > 1) {
  console.log(sayi);
}
function test(params) {
  function deneme(params) {
    //kendi alanında olduğu için dış scopedan ulaşılamaz.
    var sayi = 5;
    console.log(sayi);
  }
  deneme();
  console.log("deneme", sayi);
}
test();
console.log(sayi); */

// funcion bloc scope
/* let sayi = 1;
if (2 > 1) {
  console.log(sayi);
}
function test2(params) {
    console.log("deneme", sayi); // daha önceden ulaşılamaz.
    let sayi = 5;
  console.log("deneme", sayi);
}
test2();
console.log(sayi); */

const user = {
  name: "test",
  age: 1,
};
user.age = 2;
/* user = { //değiştirme yapılamaz
    name :'test2',
} */
console.log(user);

const sayılar = [1, 2, 3, 4, 5, 6];
sayılar.push(7);
/* sayılar = [9];  // yeni array referans verilemz
 */
console.log(sayılar);

// blok scope function içinde yer alan değişkenlere dışarıdan ulaşılamaz.
// global scopedaki değişkenlere her yerden ulaşılabilir.

// hoisting

var username = function () {
  console.log("1 satır username" + name); //undefined basar
  var name = "yahya";
  console.log("2 satır username" + name);
};

username();
