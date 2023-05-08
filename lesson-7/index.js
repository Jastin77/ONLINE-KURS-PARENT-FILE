'use strict';


//---------------<-"THIS" KEY WORD->------------


// "THIS" ->  bu uzidan tepadagini qaytarib beradi, yani masalan: 'device' ni ichida keldi device ni obeeradi. 
// Agar global scope da yozsak "window" ni oberadi.

// nimani ichida turgan busa shunga qarab intiladi.




// decloration functsiyada agar "use strict" bumasa uzidan tepada ham uzi umuman ishlayveradi va this 'window' ga qarab ketin qoladi
// agar 'use strict' busa "undefined" qaytardi

// function test() {
//     console.log(this);
// }
// test()



// experation function da kelishi this ni yani bunda ham "use strict" busa undifined qaytaradi.

// const app = function () {
//     console.log(this);
// }
// app()


// ARROW FUNCTIONDA KELISHI.

// Bunga farqi yuq "use strict" buladimi yuqmi ishlayveradi yani global "window" obyektini qaytaradi.

// const app = () => {
//     console.log(this);
// }
// app();



// Uzi ARROW functionni boshqarib bumaydi degan qoidasi bor.


// Bunga ham farqi yuq "use strict" buladimi yuqmi ishlayveradi yani "window" obyektini qaytaradi.

// bu function tugridan tugri ishga tushib ketadi
// Masalan:  

// setTimeout(() => {
//     console.log(this);
// }, 1000) // bu 1000 vaqtni bildiradi.







// const device = {
//     name: "Iphome14",
//     price: 1250,
//     color: 'deep purple',
//     memory: {
//         cpu: 16,
//         cd: 256,
//     },
//     camera: [12, 16, 48, 20],

//     about: function () {
//         return `device name: ${this.name}, price: ${this.price}, camera: ${this.camera} color: ${this.color}, OZU: ${this.memory.cpu} CD: ${this.memory.cd}`
//     }
// }


// let iphone = device.about();

// console.log(iphone);

// console.log(this);

// console.log(this.alert('HAGDYGDSY'));







//-----------------<-JSON FORMAT->--------------

// Bu format ulab beruvchi vazifasini bajaradi. backand frontend larni bog'la beradi.


// JSON -> XML -> JSON

// // JSON FORMATDA IKKIN TARAF HAM QUSHTIRNOQ ORASIDA YOZILADI.

// let json = {
//     "alert": "success",
//     "number": "2233",
//     "age": "23"
// }

// console.log(json);

// JSON -> JAVA -> JSON -> C#







// let json = {
//     alert: "success",
//     number: "2233",
//     age: "23",
//     status: true
// }


// Bu JSON formatga ugirib berdi tepadagi oyektni.

// const newJSON = JSON.stringify(json)

// endi shuni uz holiga qaytarish.

// const newJSONPARSE = JSON.parse(newJSON)


//-- bu holatda "newJSONPARSE" obyekdan farqli kopy qilib beryabdi yaniy yangi malimotni qushib beryabdi agar qushsak

// const newJSONPARSE = JSON.parse(JSON.stringify(json))

// newJSONPARSE.isActive = false //-- mana shuni malumotni qushib beryabdi.


// console.log(json);
// // console.log(newJSON);
// console.log(newJSONPARSE);









//--------------<-DOM->-----------------

// console.log(document.body);



// ------SELECTORLAR------------>

// .getElementByClassName('')

// .getElementsByClassName('') -> // bu array qaytaradi, yani HTML collection ni obetradi.

// .getElementsByTagName('') ->  // bu array qaytaradi, yani HTML collection ni oberadi.

//.getElementsByName('text') -> // bunda ham ARRAY qaytadi faqat bu 'node list' qaytadi

// .querySelector('h1') -> ELEMENT
// .querySelectorAll('h1') -> bundayam NODELIST QAYTADI.




// HTMLcollection da faqat HTML elemen/ uzatiladi
// NODE LIST da esa commintariyadagi ma'luimot/ ham kirib keladi
// 2 lasimi farqi shunda.




// let title = document.getElementByClassName('text')
// let title = document.getElementsByClassName('text')
// let title = document.getElementsByTagName('text')
// let title = document.getElementsByName('text')

// let title = document.querySelector('h1')
// let title = document.querySelectorAll('h1')

// console.log(title);



// let title = document.querySelector('.text')

// //."parentNode" -> ota element olib beradi
// console.log(title.parentNode);


// //. textContent" -> ichidagi ma'lumotni olib beradi.
// console.log(title.textContent);




// // .innerHTML -> buyam "h1" ichidagi narsalarni olib beradi, farqi esa "h1" ichida qanday boshqa 'TAG' va u= ichida maulomot kelsa uni ham olib beradi

// console.log(title.innerHTML)


// // .innerText -> orasidagi space larni tashab shunday olib beradi malumiot/ni
// console.log(title.innerText);




let title = document.querySelector('.text')

// .parentElement -> ota elementni "body" ni oberadi
// console.log(title.parentElement);

// // .parentNode -> ota elementni "body" ni oberadi
// console.log(title.parentNode);

// // .previousElementSibling -> uzidan oldingi elementni oberadi
// console.log(title.previousElementSibling);

// // .nextElementSibling -> uzidan kngi elementni oberadi.
// console.log(title.nextElementSibling);



console.log();

function red() {
    title.nextElementSibling.nextElementSibling.style.background = "red"
}