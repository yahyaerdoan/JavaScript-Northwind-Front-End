/* class Person {
  userName = "Yahya";
  constructor(userName) {
    this.userName = userName;
  }
  greet() {
    console.log(`Hello ${this.userName}`);
  }
}
const person = new Person("Yahya");
person.greet(); */

// static yaparak newlemeden çağırabiliriz.
/* class App {
  static start() {
    console.log("runs applications");
  }
}
App.start(); */

class Person { 
  constructor(ad, soyad, yaş, mail) {
    (this.ad = ad), (this.soyad = soyad), (this.yaş = yaş), (this.mail = mail);
  }

  greet() {
    console.log(`Merhaba ${this.ad} ${this.soyad}`);
  }
}
const person = new Person("Yahya", "erdoğan");
person.greet();

// Promise arda arda veri manipule edebilmeye olanak sağlar.  (resolve, reject) iki dğer alır ve kontrol sağlar
// .then response döndürür.
// ard arda function tanımlamanın önüne geçer.


// async yukaridaki promise metodunun daha kolay halidir. 