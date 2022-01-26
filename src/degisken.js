/**
 * @param  {number} x
 * @param  {string} y
 * @returns {number} rusult sayıların toplamı
 */
function topla(x, y) {
  return x + y;
}
function topla2(x, y) {
  return x + y;
}
topla();
topla2;

//objects
var user = {
  name: "yahya",
  age: "14",
};

var user = Object.create({ user });
var user = new Object({});

var numberList = [1, 2, 3, 4, 5];

var name = "test";
var clonename = null;
//eski kullanım
if (name) {
  clonename = name;
} else {
  clonename = null;
}
//yeni kullanım
var clonename = name ? name : null;
var clonename = name || null;
var clonename = name && null;

var name = "yahya";
console.log(!!name);

console.log(3 + "1");
console.log("a" - "1");
console.log(3 * "3");
console.log(3 - 3);

var sayi = "5";
console.log(parseInt(sayi));
console.log(Number(sayi));
console.log(+sayi);

var user = {
  name: "yahya",
  age: 29,
};
console.log(user);

var cloneofuser = user;
cloneofuser.age = 30;
cloneofuser.name = "Erdoğan";
console.log(user);
console.log(cloneofuser);

var cloneofuser = Object.assign({}, user);
cloneofuser.age = 31;
cloneofuser.name = "Erdoğan";
console.log(cloneofuser);

var user = {
  name: "yahya",
  surname: "Erdoğan",
  age: 29,
};

for (let element in user) {
  console.log("key:", element, "value", user[element]);
}

let sayilar = [1, 2, 3, 4, 5];
for (let element of sayilar) {
  console.log(element);
}

const username = "yahya";
const usersurname = "Er";
const sayhello = function (ad, soyad) {
  console.log(`merhaba ${ad} ${soyad}`);
};
sayhello(username, usersurname);

/* try {
  const x = 5;
  x= 3;
} catch (error) {
  console.log(error)
} */

const title = "patika";
console.log(parseInt(title));

const title1 = 12;
console.log(parseInt(title1));
console.log(title1.toString());

console.log(3 == "2"); // eşit midir karşılaştırması
console.log(3 == "3"); // eşit midir karşılaştırması true
console.log(3 === "3"); //tip karşılaştırması
console.log(3 != "3"); //tip karşılaştırması false

/* 
test || null; //test varsa testi kullan yoksa null ver
test && "test"; //test varsa testi kullan yoksa testi ver 
const x = test ? test : null; //test varsa testi(kendini) kullan yoksa null ver
const xo = !!test; //true
*/
console.log("result", 3>2>1); // 3 büyük 2'den = true(yani 1). 1 1'den büyük mü (false) 
console.log("result", 1<2<3); // true

console.log("result", 3>(2>1)); // true
console.log("result", 1<(2<3)); // false
console.log("---------------------"); // false


console.log("result", 3>((2>1)>1)); // true
console.log("result", 3>(2>1)>1); // false
console.log("result", 1<(2<3)); // false