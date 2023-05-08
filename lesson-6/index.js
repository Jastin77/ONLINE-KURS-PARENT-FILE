'use strict';


//----------------OBJECT------------->

// obyekt yaratishni har hil usuli bor, asosan 3xil usuli bor.

//--LITERAL OBJECT CREATION
//--NEW OBJECT 
//--METHODS ORQALI YARATISH BOR.


//yana boshqa usullari ham bor object e'lon qilishni pasdagi.
// constructor, class, object.assign, JSON.stringify, JSON.parse



// biz 'literal object creation' usulini kuramiz

// let person = {
//     isname: 'Bobur',
//     age: 20,
//     isStudent: true,
// };

//console.log(person);

// kngin 2-chi usuli elon qilishni obectni---


// // NEW OBJECT();
// const car = new Object({
//     isName: 'Lexus'
// })
// console.log(car);



//METHODS ORQALI YARATISH BU  3 chi usuli.
// 'create' method objectni qurib beradi va dot nation(nuqta bn qandaydir methodni qushib quyish) yani (newObj.age=24) orqali kirib boradi yani shu orqali "age" degan proporty ni creat orqali qushib quydik.

// object.create();

// let newObj = Object.create({});

// newObj.age = 24
// console.log(newObj);







//----> OBJECT ichidagi xususiytlarini olishni 2 xil usuli bor-------

// 1 chisi 'DOT NATION' de-di  nuqta bn kirib borish.
// 2 chisi 'BRAKET NATION' de-di turtburchak qovus bn olinadi


// let person = {
//     isname: 'Bobur',
//     age: 20,
//     isStudent: true,
// };

// //'DOT NATION'
// console.log(person.isStudent);

// // 'BRACKET NATION'
// console.log(person['age']);



// Endi 2 lasini qachon ishlashi

// let selecetLang = prompt('select language')

// let language = {
//     uz: {
//         Home: "Bosh sahiofa",
//         About: "Biz haqimizda",
//     },

//     en: {
//         Home: "Home",
//         About: "About",
//     }
// }

// //------- 'BRACKET NATION'  bu uzi kop ishlatilmaydi shunday holatda ishlatiladi faqat.

//console.log(language[selecetLang]);


//-----lkn bu holat bumaydi dot nation bn ishlatolmay qolamiz chunki "selectLang" ni DOT NATION bn berolmaymiz.

//console.log(language.uz.Home);






//-------------OBJECT ga method yasash---------------


// console.log(Math);

//cakulator yasaydigan object yasaymiz.


// let calc = {
//     add: function (a, b) {
//         return a + b
//     },

//     minus: function (a, b) {
//         return a - b
//     },

//     devision: function (a, b) {
//         return a / b
//     },

//     multiple: function (a, b) {
//         return a * b
//     }
// }


// // calc.add(12, 10)

// //hohlasak shunday uzgaruvchi bn uzlashtirib ham yozsak buladi 
// let result = calc.add(12, 10)

// console.log(result);
// console.log(calc.add(34, 24));


// console.log(calc.devision(34, 24));
// console.log(calc.multiple(34, 24));


// // bunda undifined typni numberga qushyabdi natijada 'NaN' qaytaryabdi. oldidagini numberga typga utkazishga harakt qilib utkazadi ham biri son busa.
// console.log(calc.add(12));


// // bunda stringni undifined ga qushyabdi.
// console.log(calc.add("12"));



// ichiga condition yozilgan hol.

// let calc = {
//     add: function (a, b) {
//         if (a && b) {
//             return a + b
//         } else {
//             return 'Qiymat xato yoki kiritilmadi'
//         }
//     },

//     minus: function (a, b) {
//         return a - b
//     },

//     devision: function (a, b) {
//         return a / b
//     },

//     multiple: function (a, b) {
//         return a * b
//     }
// }


// console.log(calc.add(12, 10));





//DENAMIK QILSAK SHUNI
// this, bind, call, apply

// let types = prompt('amalni kiriting !')
// let num1 = +prompt('n1=')
// let num2 = +prompt('n2=')


// let calc = {
//     add: function (a, b) {
//         if (a && b) {
//             return a + b
//         } else {
//             return 'Qiymat xato yoki kiritilmadi'
//         }
//     },

//     minus: function (a, b) {
//         return a - b
//     },

//     devision: function (a, b) {
//         return a / b
//     },

//     multiple: function (a, b) {
//         return a * b
//     }
// }

// let result = calc.add(num1, num2)

// console.log(result);





//---------->kngi methodlarimiz. OBJECT.KEYS, OBJECT.VALUES, OBJECT.ENTRIES, OBJECT.FROMENTRIES------------->

//OBJECT.KEYS, 
//OBJECT.VALUES, 
//OBJECT.ENTRIES, 
//OBJECT.FROMENTRIES

// bularni js ni uzi bergan obyekt un ishlatiladigan. 


let obj1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}

//Object -> method: keys, values, entries, fromEntries
// entries methodi keysni ha, values ni ham oberadi

// let objKeys = Object.keys(obj1)
// let objValues = Object.values(obj1)
// let objFull = Object.entries(obj1)

// // bu method boshidagi uz holiga qaytaradi. tepadagi methods bn ishlov berib kn uz holiga qaytarib quysa buladi.
// let reversObj = Object.fromEntries(objFull)


// console.log(objKeys);
// console.log(objValues);
// console.log(objFull);
// console.log(reversObj);

// // flat(1) bu turtburchak qovusni olib tashab qaytardi arrayni ichidagi
// console.log(objFull.flat(1));







//-------------------<-ARRAY->----------------

// BUNDA HAM BIR NECHA USULI BOR ELON QILISHNI

//1 CHISI LITERAL CREATION AN ARRAY


// bunda ham obyektga uxshab  kop malumot yozsa buladu. 
// oyektdan keyiga dot bn tugridan tugri kiri boramiz
// Arrayda esa key yuq, 'value' qiymat bugani un  valuelarning index bn murojat qilinadi. 


//1 chisi LITERAL CREATION AN ARRAY

// let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sunday']

// console.log(week[4]);



//new Array bu 2 chi usuli.

// let week = new Array['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sunday']

// console.log(week[3]);




// 3 chi usuli

// let week = [
//     [
//         [
//             [
//                 [
//                     [
//                         [
//                             ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
//                         ]
//                     ]
//                 ]
//             ]
//         ]
//     ]
// ]

// //flat() methodi tashqaridagi tyrtburchak qovus/ni olib tashaydi.

// console.log(week.flat(4));



// bu holatda flat() yoszak hammasini chiqarib oladi qovusni ichidan.

// let weeks = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
//     ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
//     ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
// ]

// console.log(weeks.flat(3));








//---------------<-// ARRAY= METODLARI->---------------



// bu holat tugridan tugri Arrayni ichiga qiymat qushib quyish.

let arr = [];

// arr[0] = 'javascript';
// arr[1] = 'php';
// arr[2] = 'node.js';
// arr[3] = 'vue.js';

// // bu'DELETE' berilgan joyni olib tashab "empty" qilib quyadi.
// delete arr[2]



//--------<METOD TEG/I.>-------

// 1 chisi "PUSH" buladi
// bu oxiridan quyshib beradi qiymatlarni

arr.push('java', 'php', 'vuejs');
arr.push('react.js')



// 2 chisi "UNSHIFT"

// bu boshidan qushadi qiymat/ni
arr.unshift('Angular')
arr.unshift('Typescript')


// 3 chisi "SHIFT"

arr.shift() // boshidan o'chiradi.
arr.shift()


// 4 chisi "POP"

arr.pop() //bu oxiridan uchiradi.




// 5 chisi "CONCAT"

let array2 = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10, 11]



console.log(array2);
console.log(arr);

let array3 = array2.concat(arr).concat(array2).concat('delphi', 'c++', 'xml'); //// Arrayni bir biriga ulaydi.

console.log(array3);




// SLICE => nusxalab oberadi   .SLICE(INDEX, INDEXGACHA)

// console.log(array3.slice(0, 5));

let copyArr = array3.slice(0, 5)
console.log(copyArr);




// SPLICE => arraydan kesib olib ta'sir ko'rsatadi   .SPLICE(INDEX, dan kn  N ta)

console.log(array3.splice(0, 10));
console.log(array3);




//------.INDEXOF METODI(.indexOf)----------

// elementning indexini aniqlab beradi


console.log(array3.indexOf('c++'));




//-----------<-INCLUDES METHOD->----------

//includes -> bu arrayda element bor yoki yo'qligini aniqlab beradi.  bu kop ishlatiladigan metod hisoblanadi.

console.log(array3.includes('c++'));




//--------------<-JOIN METODI->------------

// join -> array to  string
// yani bu arrayni stringa ugiradi va nimadurlar yozib beradi.

console.log(array3.join("+"));


// .split("") bu arrayga qaytarib beradi.

console.log(array3.join("+").split(" "));



//------LENGTH METODI---------


// arrayning uzunligini kursatadi.

console.log(array3.length);



//---------STRING METHODS


//--.toLowerCase()
//--.toUpperCase()
//--.trimStart().length
//--.trimEnd().length
//--.trim().length



// let str = prompt('str kiriting=');


// console.log(str.toLowerCase()); /// kichik qilib yozib beradi.

// console.log(str.toUpperCase()); /// BU KATTA HARF/DA YOZIB BERADI.
// console.log(str.length); /// uzunligi

// console.log(str.trimStart().length); /// chap tomondagi bush joyni olib tashaydi

// console.log(str.trimEnd().length); /// // 0'ng tomondagi bush joyni olib tashaydi

// console.log(str.trim().length); /// bu ikki tarafdagi bush joyni olib tashaydi


// if (str.trim().length) {

//     console.log("value: ", str);

// } else {

//     console.log('str length: ', str.length);

// }



//-----------SUB STRING METHODI.----------

// let str = "JavaScript";

// console.log(str);

// console.log(str.substring(1, 4)); ///indexdan indexgacha qirqadi faqat bunda 1 dan boshlab qirqadi. slice bn deyarli bir xil.

// console.log(str[0]);




//---------SEARCH METODI---------

// let str = "JaSvaScript";


// console.log(str.search('S')); /// bu indexlarini izlab qaytaradi.





//-------------MATCH METODI--------


// let str = "JavaScript juda zur dasturlash tili, javadan ham zo'r";

// console.log(str.match(/nm/gi)); // "gi" bu kalit so'zi




//-------------SPLIT METHODI-----------------


// let array4 = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10, 11]


// let newArr = array4.join('-');

// console.log(newArr.split("-"));

// console.log(newArr.split("-").reverse());  // ".reverse()"-> bu sonlarni teskari joylashtirib quydi 



let str = "JavaScript juda zur dasturlash tili, javadan ham zo'r";


console.log(str.split("java"));

/// bu bulib bulib tashaydi va qushtirnoqa olib tashaydi. agar ichiga yozilsa 'java' bu shu sozni yoki qiymatni olib tashaydi






//------------charAT METHODI---------

console.log(str.charAt(52));

/// bu sozni yoki usha indexdagi qiymatni olib beradi BU SON INDEX BULIB KELYABDI.




























// bu holatda ichkaridagi numni qiymatini uzgartirsa buladi.

// const num = {
//     num: 12
// }

// num.num = 13