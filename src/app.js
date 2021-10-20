// var, let, const : keyword
// değişken tanımlarken let kullanılır.
// var tanımlarsak tip güvenli olmadığı için son nesneyi yazar.

let sayi1 = 10;
sayi1 = "Yahya Erdoğan";
let student = { id: 1, name: "yahya" }; // parantez objedir. obje tanımladık.
// console.log(student)

// Fonksiyon tanımlama
function save(ogrenci, puan = 20) {
  //hata verir. parametreye ne verirsek onu döndüreceğini var sayar.
  // parametre içinde ne varsa onlar sonuca etki eder. özellik dışı nesne ise undefined döner.
  // Default parametreyi en sona yazmak gerekir. java c# böyle ister.
  // console.log(ogrenci.name + " : " + puan)
}
save(student, 100); //puanın defaultu 20 vermezsek okumaz, burada farklı verebilir ve olumlu çıkar.
// burada studenti kaldırıp undefined geçersek yukarıdaki parametreyi de değiştirisek yine verileni yazar.
// mantık oluşturu undefined'ın zıttını getirir. ve sonucu bulur.

// Array tanımlamak
let students = ["yahya", "Betül", "Erdoğan"];
// console.log(students)

let teachers = [
  student,
  { id: 1, name: "Betül" },
  "Ankara",
  { city: "İstanbul" },
]; //iç içe obje formatında array tanımlaması yapılabilir
// console.log(teachers)

// Arraylar üzerinde çalışabilmek için 3 hayati konu;
// Rest, Spread, //Destructure

// Rest operatorü //Geriye kalanlar demektir.
let showProducts = function (id, ...products) {
  // js. bir değişkene fonksiyon atanabilir.
  console.log(id);
  console.log(products[0]); // index vererek yazar. array dışında verirsek ayrı ayrı 3 indeksi de vererek yazabiliriz.
};
showProducts(10, ["Bardak", "Ceviz", "Su"]); //array içinde array oluşturduk.
// array olarak gönderdiğimizde tek data olarak gözükür. Tek elaman olarak gönderir.

// Spread Operatörü
// Elimizde bulunan arrayi ayrıştıtıyoruz.
// parametreyi virgülle ayırır gibi ayırmaya yarıyor
let points = [1, 3, 5, 21];
console.log(...points);
console.log(Math.max(...points)); // en büyük sayıyı verir.
console.log(..."ABC", "D", ..."EFG", "H"); // yan yana olan harfleri ayırarak yazdırır

// Destructure operatörü
// Elimizdeki arrayin değerlerini değişkenlerine atamak işlemini yapar.
// Arrayı parçalamak
// Burada bir fonction atamasını da destruc edebiliriz.
let populations = [10000, 20000, 30000, [40000, 50000]];
let [small, medium, high, [veryHigh, maximum]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

function someFunction([small1], number) {
  console.log(small1);
}
someFunction(populations); // array verdiğimiz için değişken tanımını vermemiz gerekir.

// obje Destructure // objenin istediğin elemanlarını değişkenlere atama yöntemidir.
let category = { id: 1, name: "İçecek" };
console.log(category.id);
console.log(category["name"]); //kategorinin namei, .name de bu farklı kullanım

// Destructure etme yöntemi
// Elemanlarını değişkenlere atama yöntemidir
let { id, name } = category;
console.log(id);
console.log(name);

//oop
class Customer {
  // Değerleri atamak için contructors protitipi oluşturulur.
  // dışarıdan ulaşmak için export kullanılır.
  constructor(id, customerNumber) {
    // tüm denemelerin sonucunda yol buraya çıktı. instancedaki özelliğe
    // ulaşıp yazdırabilmek için onu this. ile çağırmamız gerekir.
    // prototyping özelliği oluşturarak yazdırabiliriz.
    this.id = id;
    this.customerNumber = customerNumber;
  }
}

// newleme olayı bu şekilde
let customer = new Customer(1, "12345"); //instancedaki özelliği yazdıramayız.

// prototyping özelliği oluşturarak yazdırabiliriz.
// instance yapılan prototyping
customer.id = 12;

// nesnenin özelliğini yazdırmaz
console.log(customer.id);

// classa yapılan prototyping
Customer.yahya = "Erdoğan";
console.log(Customer.yahya);

// sonuç
console.log(customer.customerNumber);

// üst classtan inherit etme mantığı
class IndividualCustomer extends Customer {
  constructor(firstName, id, customerNumber) {
    super(id, customerNumber); // Base classa veri gönderiyoruz.
    this.firstName = firstName;
  }
}
class CorporateCustomer extends Customer {
  constructor(companyName, id, customerNumber) {
    super(id, customerNumber);
    this.companyName = companyName;
  }
}

// react map'i çok sever çok kullanır. amaç elimizdeki veriyi ekrana göre şekillendirmektir.
// map - filter - reduce
let products = [
  { id: 1, name: "Acer Laptop", unitPrice: 15000 },
  { id: 2, name: "Asus Laptop", unitPrice: 16000 },
  { id: 3, name: "Hp Laptop", unitPrice: 13000 },
  { id: 4, name: "Dell Laptop", unitPrice: 12000 },
  { id: 5, name: "Casper Laptop", unitPrice: 17000 },
];

// ekrana basmak için kullanılır. map arrayi dönüyor, her bir ürünü hafızaya alıp yazdırıyor.
console.log("<ul>");
products.map((product) => console.log(`<li>${product.name}</li>`));
console.log("</ul>");

products.map((product) => {
  //birden fazla işlem yapmak için süslü paranteze ihtiyacımız vardır.
  console.log(product);
  console.log(`<li>${product.name}</li>`);
});

// Filter
// filter yeni bir array oluşturuyor. Ekran yeniden render edimesi için refaransın değişmesi gerekir.
let filteredProducts = products.filter((product) => product.unitPrice > 12000);

console.log(filteredProducts); // 4 elamanlı array çıktısı verir.

// Reduce
// acc : accumulator : dönüş değerlerini toplar. yeni ürün eklendikçe toplamın üstüne yeni toplam ekler.
let cartTotal = products.reduce((acc, product) => acc + product.unitPrice, 0);

console.log(cartTotal);

// map'i yeni objeler üretmek için de kullanabiliriz.
// toplam fiyatı filtreleyip hesapladıktan sonra kdv fiyatı da ekler sonuç döndürürüz.
let cartTotalKdv = products
  .filter((p) => p.unitPrice > 13000)
  .map((p) => {
    p.unitPrice = p.unitPrice * 1.18;
    return p;
  })
  .reduce((acc, p) => acc + p.unitPrice, 0);

console.log(cartTotalKdv);

console.log(
  "*------------------- JAVASCRİPT 18 Ekim 2021 Pazartesi ------------------------*"
);

let users = ["Yahya", "Erdoğan", "Ali", "Veli", "Bayram"];
for (let index = 0; index < users.length; index++) {
  console.log(users[index]);
}
