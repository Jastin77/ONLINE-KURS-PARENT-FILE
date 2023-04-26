// clearconsole.log("Jasur");
// console.warn('internet no unstabeled browsers');
// console.error('404 not found');
// console.info("successfully");
// console.table({
//     id: 1,
//     name: "jasur",
//     age: "25"
// });







/*console.log(document.getElementById('text'));
document.getElementById('text').innerHTML = "<i>Java</i>"  */


// console.log(window);


// alert('hello world');
// confirm('Sayt sizga yoqdimi?');
//prompt('HRU?');


// <------------MATEMATIKLAR AMALLAR------------->


// +,  m,  *,  /,  %,  ++,  --.

// "%" ==> qoldiqli bulish.
// "++", "--"==> bittadan ortirish yoki kamaytirish. degani

// console.log('1' + 15 - 20);
// console.log(11 + "11"); // 1111
// console.log(20 + "20"); // 2020
// console.log("200" - 50); // 150
// console.log("200" / 50); // 4
// console.log(100 * "3"); // 300
// console.log(100 * ""); // 0







// <------------- VAREIBLES----------- >


// VAR -->
// LET  -->
// CONST -->


// var ism = "jasur";      // declare
// ism = "Albert";           // assign
// var ism = "Sardor";        /// re declare yani qayta e'lon qildim

// yosh = "25";

// console.log(ism);
// console.log(yosh);

// "VAR" da qayta e'lon qilsa bo'ladi. shuning un VAR ni global o'zgaruvchi ham d-di


// let ism = "jasur";     // declare
// ism = "Albert";         // assign
// let ism = "Sardor";       // re declare qilib bo'lmaydi

// yosh = "25";

// console.log(ism);
// console.log(yosh);

// <----"LET" da qayta e'lon qilib bo'lmaydi  chunki uning id band bo'ladi call stackda, lkn qayta qiymat tayinlashga ruxsat beradi---->




// const ism = "jasur";         // declare
// ism = "Albert";               // assign
// const ism = "Sardor";         // re declare

// yosh = "25";

// console.log(ism);
// console.log(yosh);

// <---CONST da ham qayta e'lon qilib bo'lmaydi, bunda qayta qiymat tayinlab ham bo'lmaydi.--->


// {     // BLOCK SCOPE bunda o'zgaruvchi uzini ichida ishlashi kkligida.
//    var ism = "Boburbek";    // var hohlagan joyda yuriydi blockda busa ham bumasa ham sizib yuradi VAR.
// }

// console.log(ism);





// {  // BLOCK SCOPE bunda o'zgaruvchi blocdan chiqib ketolmaydi, faqat uzini ichida ishliydi.
//     let ism = "Boburbek"; // 

//     // console.log(ism);
// }

// console.log(ism);





// console.log(ism);
// {      
// let ism = "Boburbek";       //  LET da uzidan tepada e'lon qilish mn emas "consol.log" ni 
// const ism = "Boburbek";       //  LET da uzidan tepada e'lon qilish mn emas "consol.log" ni 
// var ism = "Boburbek"; //  LET da uzidan tepada e'lon qilsa bo'ladi faqat  UNDIFINED BERADI "consol.log" ni 
// }






//------------DATA TYPES IN JAVASCRIPT----------------------



// 1---

////////----------- STRING--------

// let isName = "javascript";
// let src = "Vue Js";
// let framework = `999999`;



// /////----------NUMBER--------

// let agr = 24;
// let num = 0.008;
// let randoms = -888;



///////--------- BOOLEN--------
// true -> 1
// folse -> 0

// console.log(true + true) // ==> 2



///////-------- UNDEFINED-------

//bu yurda o'garuvchi elon qilib qiymat bermasak bizga (pasdagidaqa)  undefined qaytaradi.

// //// let isIOS
// //// console.log(isIOS);

// agar hechnara qiytmaydigan qiladigan bo'lsak  YANI BO'SH DEMOQCHI BUGANIMIZDA, yani "null" ni chiqarmoqchi bo'lsak biz nullga tenglab quyamiz qiymatni joyiga.(pasdagidaqa)

// ////// let isIOS = null
// ////// console.log(isIOS);



/////////-------------- BIGINTEGER-----------

// bunda biz kotta xonali sonlarimizni saqlash un ishlatamiz. e'lon qilish.

// let bigNumber = BigInt(462847643756348405589376985);

// console.log(bigNumber)





/////////-----------------SYMBOL-----------------

// Biz SYMBOL orqali ularning qiymatlari bir xil bo'lsa ham unique ligini bildirish un, ya'ni (unique degani=>) qiymatlari xil lkn takrorlanmasin degani

//Yana bu shu 2ta qiymatni unque qilish un, obektning keylari unam ishlatiladi ya'niy keylarni bir xil emasligini ko'rsatish un ham "SYMBOL"dan foydalaniladi.

// let isSymbol = 'frontend';
// let isString = 'frontend';

//let isSymbol = Symbol('frontend');
//let isString = Symbol('frontend');

// console.log(isSymbol);
// console.log(isString);

//console.log(isSymbol === isString);

// ""===" 3ta renglik "isSymbol"ning qiymati yoki typi "isString"ga tengmi deb surayabdi.  bu javoblarda BOOLEN tipida qaytaradi "true or folse"