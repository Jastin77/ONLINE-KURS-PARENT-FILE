'use strict';



// let a = 24;
// //------Logical and && , logical or ||-----------



// if (a % 2 == 0) {
//     console.log('xa')
// } else {
//     console.log('yoq')

// }



// 150 ball

// IELTS 5 + 5000$



// let ball = +prompt('Balingizni kiriting=');
// let usd = +prompt('kontarktni kiriting=');
// let IELTS = +prompt('IELTS darajangizni kiriting=');

// if ((ball >= 150) || (IELTS >= 5 && usd >= 5000)) {
//     console.log('congratulationss');
// } else {
//     console.log('No successfull');

// }






//----------TERNORY OPERATOR (3 LIK OPERATORI)---------


//---- BU YERDA SOROQ ('?') AGAR SHUNDAY BULSA DEYABDII,   (':') 2 NUQTA ESA AKS HOLDA DEYABDI

//---- Agar (3>2 ?) condition bajarilsa birinchi blok ishlaydi ('ha'),  aks holda 2 chi blok ishlaydi ('yo/q')

//------- ('if else') ni bir qatorga yozilishi desa ham buladi.



//------------- BU PASDAGI. 3 lik operatori---------

// 3>2 ? console.log('xa'): console.log('yo/q');

// isBuy ? console.log('ha') : console.log('yo/q');

// 4 >= 3 ? alert('success') : alert('no successfull')








//-------------SWITCH STATEMANT------------->


//----DAY dagi 4 ni 'case' ni joyiga quyib solishtirib kuradi 3 talik teng bn '===' tugri kelsa yani 'true' qayatrsa shu yerda tuxtaydi, bumasa yani 'folse' qaytarsa pasga yana tushadi agar hech biri tugri kelmasa "DEFAULT"ga utadi va, 'not found' qaytadi.   'BREAK' tuxtadi 

// malasan: 4===1 : console.log('Monday'); break;....  shunday tartibda davom etadi.



//--BU haftani tekshirib beradigan dastur----.

// "IF ELSE"dan farqilisi bunda hechnqanday katta yoki teng demaydi faqat anniq tekshiradi.

// let day = 4

// switch (day) {

//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;

//     default:
//         console.log('not found');
// }







//----------LOOPS--------------

//--->WHILE,  DO WHILE, FOR---

//--CICLE LI BULIB ISHLAYDI--


//<==>bunda 10 qovusni ichiga tushadi 100 dan kichik 'n++' ga tushadida 1 taga kopayadi yani 11 buladi,  kn yana qovusni ichiga tushadi 100 dan kichik 'n++' ga tushib 1 ga ortadi 12 buladi...  bu cicle oxiri 99 gacha davom etadi. 99 buganda bittaga ortib 100 bulib 100 100 ga teng bulib qolib "FOLSE" qiymat qayatdi ungacha bugan hamma cicleda "TRUE" qaytaraveradi. 100 100 dan kattamas chunki<=====>

// n++ incriment de-di

// let n=10
// while (n<100) {    
//     console.log(n);
//     n++;                
// }


// 10 dan 100 gacha buganlarning faqat juftini olsak 'WHILE ' orqali


//agar "if" shartni ichidagi (n%2==0) '0' ni joyiga 1 quysak toq sonlarni oberadi

// bu kod ham shunaqa cicle bulib tekshirib ishlayveradi.

// let n = 10;

// while (n<=100) {


//     if (n%2==0) {
//         console.log(n);
//     }

//     n++;
// }



// ---DO WHILE-----

// buning "WHILE" dan farqi birinchi ishni bajaradi kn shartni tekshiradi, "WHILE" da esa teskarisi shartni tekshirib kn ishni bajaradi.


// let n = 10;

// do{
//     n++;
//     console.log(n);
// }while (n<10)





//<------->FOR<--------->

// bunda hammasi ichida beriladi uzgaruvchi ham ichida e'lon qilinadi, bu ham cicle bulib ishliydi.

// for (let n = 1; n <= 6; n++) {
//     console.log(n);
// }








//--------------<-FUNCTIONS->------------------>
// FUNTION DECLORATION
// FUNCTION EXPRETION
// ERROW FUNCTION


//-------FUNCTION DECLORATION------------------ 

//---YOZILISHI.

// function func_name(arg1,  arg2, arg3 ....) {
//     // buyoqda ish bajariladi.
// }

// funtion decloration
// 1 camel case
// 2 snacke case
// 3 pascal case

// function myName(){}  // camel case 75%   foydalaniladi.
// function my_Name(){}  // sancke case 10%
// function My_Name(){}   // pascal case 5%



// function sayName(a, b, C) {
//     console.log('Jasur' + C);
//     // console.log(a);
//     console.log(`${a}ning kasbi ${b}`); //ES6
//     // document.body.style.backgroundColor = "#000";

// }

// sayName('Samandar', 'programmer')
// sayName('Bobur', 'UX designer')
// sayName('Said', 'Copyright')



//Hisoblab beruvchi function.

// function counter(a, b) {
//     // console.log(`${a}+${b}=${a+b}`);
// }
// counter(10, 34)



// function counter(a, b) {
//     // console.log(`${a}+${b}=${a+b}`);
//     return 123 / a
// }
// // counter(10, 34)
// console.log(counter('10'))





//------<-EXPERATION FUNCTION->------------>



// experationning  decloration dan farqi birinchisi koproq uzgaruvchilarda ishlatsa buladi, 2 chisi funcsiyani uzidan tepada chqirib bumaydi, yani buni: 
// calc('Javascript', 'Vue.js', 'Nuxt.js')  
// 3 chi farqi XOISTING XUSUSIYAYI YOQ.

// XOISTING BU FUNCSIYANI UZIDAN TEPADA CHAQORGANDA ISHLASH DEGANI 

//

// Yozilishi, (seyntaksisi)



// const calc = function (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// calc('Javascript', 'Vue.js', 'Nuxt.js')

// // biz 1 ta function da qandaydir uzgaruvchiga tenglab olib bir necha marta natijalarni olish mn (funcsiya sifatifa ishlatish mn ekan.)

// const letter = calc;
// const test = letter;
// test('javasrcipt', 'javasrcipt', 'javasrcipt')

// letter('A', 'B', 'C')



// experation dagi holat. "return" buyiha

// const calc = function (a, b, c) {
//     return a + b + c;
// }
// console.log(calc('Javascript', 'Vue.js', 'Nuxt.js'));







//---------------<-ARROW FUNCTION->------------------>

// YOZILISHI

// bunda ham experation ga uxshab ketadi uzgaruvchiga tenglab olib qayta ishlatsa bularkan.  lkn uzidan tepada ishlatib bumaydi.

//const message = (a, b, c) => console.log(a, b, c); // bu bir qatorga yozish de-di pasdagisini

// const message = (a, b, c) => {
//     console.log(a, b, c);
//     console.log(a);
// }

// message('javascript', 'PhP', 'typscript')

// const app = message;

// app('java', 'Tilwend', 'ux/ui')




// bu arrow dagi holat return buyicha

// bu funcsiyada 'return' kalit sozinni ishlatmasdan ham yozsa buladi

// const message = (a, b, c) => (a + b + c)

// const message = (a, b, c) => {
//     return 
// }


// console.log(message('javascript', 'PhP', 'typscript'));



// bu holatda tugridan tugri nimadur tugridan tugri funksiyaga tenglab quysa buladi yani tepadigalrdan farqli.

// biz funcsiyani consolega chaqirdik bizga 'hello vue.js' ni qaytardi.

// const app = () => 'hello Vue.js';
// console.log(app());




//-------------<-DEFAULT PARAMETR->---------------

// const app = (a = 'Vue.js') => {
//     console.log(a);
// }
// app()
// // app('React.js')




//-----------BOSHQARIB BUMAYDIGAN FUNCTSIYA UZINI UZI CHAQIRIB UZI UN ISHLAYDIGAN FUNCTION------

// bu functionni naa bironta uzgaruvchi bn boshqarib buladi naa boshqa joyda chaqirib buladi, faqat shu yerda ishlaydi uzi un hotira hosil qilib olib.

//-IIFE-> Immdediatly Invoked function Experation. de-di

(function () {
    let number = 112
    console.log(number);
}())