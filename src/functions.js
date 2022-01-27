/* function topla(sayi1, sayi2, ...restparametrs) {
    console.log(restparametrs) // toplam dışındaki sayıları arry verir
    return sayi1 + sayi2;
}
console.log(topla(2,3,4,5)); */

// callback fuction
/* const add = function () {
    
}
add;
button.addEventListener('click', add);
button.addEventListener('click', add()); // okuduğunda işlemi yapar */

//calculator

/* function calculate(sayi1, sayi2, operation, resultHandlaer) {
  if (operation === "Topla") {
    resultHandlaer(sayi1 + sayi2);
  }
  return 0;
}
function showResult(message, result) {
  console.log(`${message} ${result}`);
}
calculate(3, 4, "Topla", showResult.bind(this, "Sonuç: "));
 */
//pure - impure functions
// ilgili parametreyi alıp onlarla işlem yapıp dönüş yapması pür fonksiyon
//dışarıdaki scope müdahale yapmamasıdır.
function topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}

//impure functions
// değişkenlerin birbirine bağımlı olduğu yapıdır.
// bir fonksiyon olabildiğince pür olmalıdır.
/* let currentValue = 0;
function topla(sayi1, sayi2) {
  currentValue = sayi1;
  return sayi1 + sayi2;
}
console.log(topla(2, 3));
console.log("curValue", currentValue); */

// factory functions
// kod tekrarının önüne geçmek maksat
// metod içinde saklanır
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
let add = makeAdder(0);
let add4 = makeAdder(4);

console.log(add(34));
console.log(add4(4));

// iç içe functions kod kalitesini arttırır. kod tekrarını engeller.
function createVergiHesaplayici(tax) {
  function vergiHesapla(amount) {
    return amount * tax;
  }
  return vergiHesapla;
}

const kdvMiktariHesaplayici = createVergiHesaplayici(0.18);
const gelirVergisiHesaplayici = createVergiHesaplayici(0.2);

console.log(kdvMiktariHesaplayici(100));
console.log(gelirVergisiHesaplayici(200));
