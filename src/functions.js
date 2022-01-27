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

function calculate(sayi1, sayi2, operation, resultHandlaer) {
    if (operation === 'Topla') {
        resultHandlaer(sayi1 + sayi2);
    }
    return 0;
}
function showResult(message, result) {
    console.log(`${message} ${result}`);
}
calculate(3,4, 'Topla', showResult.bind(this,'Sonuç: '))