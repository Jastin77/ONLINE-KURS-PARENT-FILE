"use strict";
// qisqacha doim yangi versiyada ishlasak shuni yoqib quyamiz.

// ma'nosi qat'iy ishlash degani.  VAZIFASI: qattiy yangi versiyada ishlashni ta'minlab beradi.

// GLOBAL EXCUTION CONTEXTDA YOZILYABDI
// FUNCTION EXCUTION CONTEXTNI ICHIDA HAM YOZILADI
///MASALAN: 
// function app({
//     "use strict";
// })





//----------O'ZLASHTIRISH OPERATORI------------

//let a = 12;
//a = 59           // bunda value ni uzgartiryabmiz xolos.
//let b = 13;

//a=a+b;       // bu yerda "a" ga qayta qiymat tayinlayabmiz.

//a += b;      // bu kurinishda "A"ni "B"ga qo'shib quyadi
//a -= b;      // bunda ayirib quyadi.


//a = a * b;       // buni ham qisqartmasi pasdagidaqa yoziladi
//a *= b
// a **= b            // 2ta kopaytma darani bildiradi. 12 ning 13 chi darajasi boladi.

// a+="salom";          //12 salom qaytaradi bunda bizga.

//a %= b;               //bunda 12 qaytaradi chunki kichkina sonning uzi qoldiq buladi, tepada kichik son busa

// MANA SHULAR O'ZLASHTIRISH OPERATORLARI


// console.log(a);



//----------------------TAQQOSLASH OPERATORLARI--------------------


// let a = 12;
// let b = 13;

//console.log(10 = '10');             //bunda 10 10ga teng deyabdi.
//console.log(10 == '10');   //? true           //tengmii deb surayabdi.bu 2 ta teng belgisi 2 tarafdagi qiymat tengmi deb surayabdi.

//console.log(10 === '10'); //? FALSE        // bu 3ta tenglik 1chi qiymatlarni kn typelarni tekshiradi.  bu holatda   "true or folse"   qaytaradi(BOOLEN) bo'ladi.



//----------TYPEOF qaysi typelini tekshiradi-------


// console.log(typeof 'false');               //bunda string ni kursatadi

// console.log(typeof 'false' * 0);               //NaN qaytaradi. NaN degani 

// console.log('false' * 1);               //NaN qaytaradi. qachonki STRINGga numberni kopaytirsak yoki ayirsak (haqiqiy string bolsa) bunday holatda  "Nan (not a number)" qaytaradi.

// NaN ning type yani holati "number" ga kiadi.


// console.log('false' + 1);               //bunda yonidan qushib quyadi faqqat qolganida undayemas


// console.log(typeof ('66' / 1));
// console.log(typeof (typeof '66' / 1));               //typi 'number' boladi

/// TYPE CONVERSION de-di, yani oddiy string('66') ni 1 ga bulish orqali type ni uzgartiryabmiz.


// -> "! IS NOT" -> emas.

// console.log(10 != '10');            // folse        qaytadi. bunda 2ta tenglikdagiga uxshab qiymatni tekshiradi,  10 ning qiymati 10 teng emas qiladi "!" belgisi.

// console.log(10 !== '10');             // TRUE ! SABAB.   bunda esa typelari bn tekshiradi,


// console.log(!true);  // FALSE


// console.log(11 >= 10); //ture
// console.log(11 <= 9); //false





//-------------------->TYPE CONVERSION<------------------->
// ----------------(ma'lumot/ni almashtirish)------------->
// let str = 'javascript'; //string
// let str = 'javascript' * 1; //NaN

// let str = 'javascript';
// let number = Number(str);          // bundayam type ni NUMBER ga ugirib beradi.
// console.log(number);
// console.log(typeof number);



// let num = 12 + ""                  //12 qaytadi stringni ichi bush qiymatligi un.

// let num = 12
// let str = String(num)                  // bunda raqamlarni "STRINGA" ogirdik yani 12 stringa aylandi, agar number bugandi 12 kuk rangda qaytar edi.

// console.log(str);
// console.log(typeof str);



// bu holat backanda API da bazi vaqt raqam keladi or string holatda raqam keladi biz uni "number" ga ugirib 'CALCULATSIYA' qilishimizga tog'ri keladi
// agar ugirmasak sonlarni hisoblamasdan yonma yon quyib quyadi.








//-------------------------->TRUTHY and FALTHY-------------------->

// TRUTHY -->  1
// FOLTHY -->  undefined,  emty space,  null,  NaN,  false,  0(raqamiham)


// agar 11 10 dan katta busa "xa" chiqar aksxolda "yoq" ni chiqar deyabdi.
// if (11 > 10) {          
//     // code true

//     console.log("xa");

// } else {
//     // code false
//     console.log("yo'q");
// }

// let a             // bu holda   a "undifained(yoq)"" ga   teng boladi.
// if (a) {
//     console.log("xa");

// } else {
//     console.log("yo'q");
// }


// let a = "-1"
// if (a) {                   //hechqanday uzgaruvchi yoqbusa, condition ishlamaydi va "Reference Eror"beradi
//     console.log("xa");

// } else {
//     console.log("yo'q");
// }


// let a = "0";
// if (a) {
//     console.log("xa");

// } else {
//     console.log("yo'q");
// }


// console.log(12 * "");                   // bunda "0"  qaytaradi. bush joy nolga teng buladi kopaytma va bulishda.

// console.log(1 / 0);                   //"INFINITY (cheksizlik)" truthy qiymat.






//--------------------- TEMPLATE LITERAL---------------->
// TEMPLATE LITERAL--> bu 1 qatorda ham VAREIBLE/ni ham STRING/ni yozib ketish.     BIZGA BU MAVZU "VUE.JS" da ham kk buladi.
// MISOL UCHUN:

// let str = "java";
// let str2 = "Script";
// let str3 = str + str2;

// console.log(`Welcome to ${str+str2} ${str2}`);         // bunda bektik belgisini ichida yozilarkan. agar oddiy qushtirnoq busa fugurniy qovusni ichidagilarni qiymatimas shu kurinishi qaytib keladi.



// console.log("Welcome to  " + str + str2 + " smth");             // bu oddiy kurinishdagi yozilishi





//---------------->MATH OBYEKT------------------------->

// console.log(Math);



// let num = 12.3465878

// console.log(Math.floor(num));         //"FLOOR"   pasga qarab yaxlitlaydi.

// console.log(Math.ceil(num));          //"CEIL"    yuqoriga qarab yaxlitlaydi.

// console.log(Math.round(num));        //"ROUND"   jaqqoniy yaxlitlaydi 5 kichik pasligiga qarab yaxlitlaydi.
// console.log(Math.abs(num));          //"ABS (absolut)"   bu musbat son qilib beradi.

// console.log(Math.trunc(num));          // "TRUNC" faqat butun qismini olib beradi

// console.log(Math.max(1, 2, 3, 2546, 45, 5, 78));          //"MAX" bu sonlar ichidan eng kattasini olib beradi.

// console.log(Math.min(1, 2, 3, 2546, 45, 5, 78));          //"MIN" bu sonlar ichidan eng kichigini olib beradi.

// console.log(Math.pow(169, 1 / 2));          //"POW" ildiz olib beradi, ham 1/3 ga uxshganlarni ham ildizini oliberadi.

// console.log(Math.sqrt(169, 1 / 2));          //"SQRT" ildiz olib beradi

// console.log(num.toFixed(3));          //"TOFIXED" nuqtadan kngi sonlarni sanab oberadi.

// console.log(Number(num.toFixed(3)));          //"TOFIXED" nuqtadan kngi sonlarni sanab oberadi.

// console.log(Math.random(num)); //           //"random" bu 0 dan 1 gacha randomlaydi

// console.log(Math.random() * 10);          //"random" bu 1 dan 10 gacha randomlaydi

// console.log(Math.ceil(Math.random() * 100));          // budan faqat butun qismini randomlaydi.SS








//---------------------<CONDITION(IF, ELSE)<--------------------->

let light = 'yellow';
let startetAt = 10;

if (light === 'green') {
    console.log('Go !');

} else if (light === 'yellow') { // mana shuyerga kelib tuxtaydi ishlashi as true qaytaradi
    console.log('Attention  !!!');
} else {
    console.log('STOP');
}