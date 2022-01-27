// obje tanımlama çeşitleri
/* let user = {};
let user = Object.create({});
let user = new Object({}); */

/* let isim = "isim";
let user = {
  name: "yahya",
  ["email"]: "yahya@yahya.com",
  [isim]: "kerem", //dinamik property
  isim, //yukarıda tanımlayıp değişkene virgül ekleyerek çağırabiliriz.
};
console.log(user); */

//let x = { a: 1, b: 2, c: 3 };
//spread operatörü yukarıdaki değişkenin referansını değiştirme yöntemleri
/* let y = { ...x };
let y = Object.assign({}, x);
let y = x.map(); */

//add, modify, delete
/* x.d = 4;
x.d = 5;
//delete x.d;
console.log(x); */

//property, method chaining ard arda metod çağırma
/* let project = {
  title: "yahya",
  info: {
    surname: "erdoğan",
  },
  print: () => {
    console.log("yahya");
  },
};
console.log(project.info.surname); project.print(); */

//object desctructuring // hızlı şekilde metod tanımlama value alınır. referans değişmez
/* let user ={name:'keram', surname:'yahya', age: 1};
let {name, ...otherProps} = user;
console.log(name, otherProps); */

//var mı yok mu
/* let user ={name:'keram', surname:'yahya', age: 1};
//console.log(user.hasOwnProperty('yahya'));
console.log('yahya' in user); */


// this 
/* let project = {
  title: "yahya",
  info: {
    surname: "erdoğan",
  },
  getProject: function () {
      console.log(this);
  },
};
project.getProject(); */

// büyük küçük yazma bind metodu tamamlar.
/* let project = {
    title: "yahya",
    info: {
      surname: "erdoğan",
    },
    getProject: function () {
       return this.info.surname.toLocaleUpperCase();
    },
  };
  let {getProject} = project;
  getProject = getProject.bind(project);
  console.log(getProject()); */

  //set get
  let user = {
      set name(value){
          this._name = value;
      },
      get name(){
        return this._name;
    },
  };
  user.name= 'yahya';
  console.log(user.name);  
