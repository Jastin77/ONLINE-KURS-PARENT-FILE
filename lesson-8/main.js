'use strict ';


// let text = document.querySelector('.text'),
//     input = document.querySelector('input'),
//     btn = document.querySelector('.btn');



/// .nodeName -> tagni nomini yozib beradi.
/// .tagName ->
/// .nodeType ->
/// .className ->



// --> getAttribute('nameATT') -> HAR QANDAY ATTRIBUTE QIYMATNI OLIB BERADI.

// --> setAttribute('nameATT', value) -> HAR QANDAY ATTRIBUTEGA QIYMAT TAYINLAYDI ! YOKI QO'SHADI !

// --> .hasAttribute('id') -> attribute bor yoki yoqlikni aniqlaydi, (classmi, id,mi qandaydir attribute/ni...)


// console.log(text.getAttribute('class'));




/// Pasda btn ni bosganimizda 'type="text"' uzgarsin  passwordga demoqchimiz

// CSSstyleDecloration -> OBJECT har qanday elementda mavjud bo'sh property/ obyekt/i.


// function setInput() {

//    // input.setAttribute('type', "password");
//     input.setAttribute('placeholder', "enter password");

///////// value ni olish un nuqta bn kirisni uzi yetadi.
//     console.log(input.value); 

// }








// inline -> attributes

// btn.onclick = setInput

// bu holda ham yozsak buladi "onclickni".
// btn.onclick = () => {
//     setInput();
// }


// console.log(text.style.backgroundColor = "aqua");
// text.style.color = "red";
// text.style.width = "500px";
// text.style.margin = "30xp";

// text.style.cssText = "background-color:aqua; color:red; width:500px margin:30px";


// console.log(text.style);







// // ocnlick, onChange, onInput,

// // inputga 'oninput' ni (yani inputni ichiga nimadur siz yoziladi barauzerda) yozyotgan vaqtimiz, value sini tekshirdik 6 tadan kattaligini, 6 tadan katta buganda 'green' ga buyadik, aks holda 'red' ga buyadik. pasdagi funcsiyada.

// input.oninput = function () {

//     // console.log(input.value);

//     if (input.value.trim().length > 6) {
//         input.style.border = "4px solid green"
//     } else {
//         input.style.border = "4px solid red"
//     }
// }





//----------------<-DATASETlar ATTRIBUTE->----------------


// dataset

// let photos = document.querySelectorAll('.cover');
// let select = document.querySelector('#photos');

// bu data/ni uzimiz yozib chiqdik obyektga category/ini

// photos[0].dataset.photo = "photo";
// photos[1].dataset.photo = "photo";

// photos[2].dataset.photo = "art";
// photos[3].dataset.photo = "art";

// photos[4].dataset.photo = "tech";
// photos[5].dataset.photo = "tech";


// photos[6].dataset.photo = "music";
// photos[7].dataset.photo = "music";


// console.log(photos[0]);
// console.log(photos[1]);
// console.log(select.hasAttribute('id'));



//-----------DIYNAMIC->------------

// creatElement -> dinamik element generatsiya qib beradi
// append ->  buu oxiridan element qushadi
//prepend -> bu boshidan element qushadi



// let gallery = document.querySelector('.gallery');

// function addElmant(id) {
//     console.log(id);

//     // bu element yaratish "img" elementini yaratyabmiz.
//     let img = document.createElement('img');

//     img.setAttribute('src', `https://picsum.photos/id/3${id}/300/300`);
//     img.setAttribute('alt', "photo 1");

//     gallery.append(img);

// }

// for (let i = 0; i < 99; i++) {
//     addElmant(i)

// }


// addElmant()

// gallery.innerHTML = img;

// console.log(img);


/// APPAND -> oxiridan qushadi elemnt/ni....
// gallery.append(img);

//// PREAPEND -> BU BOSHIDAN QUSHIB BERDI ELEMENT/NI....
// gallery.prepend(img);




// let images = [{
//         url: "https://picsum.photos/id/311/300/300",
//         category: "photo",
//         id: "1",
//         title: "this is a photo"
//     },
//     {
//         url: "https://picsum.photos/id/312/300/300",
//         category: "photo",
//         id: "2",
//         title: "this is a photo"
//     },
//     {
//         url: "https://picsum.photos/id/313/300/300",
//         category: "photo",
//         id: "3",
//         title: "this is a photo"
//     },
//     {
//         url: "https://picsum.photos/id/314/300/300",
//         category: "art",
//         id: "4",
//         title: "this is a photo"
//     },
//     {
//         url: "https://picsum.photos/id/315/300/300",
//         category: "art",
//         id: "5",
//         title: "this is a photo"
//     },
//     {
//         url: "https://picsum.photos/id/316/300/300",
//         category: "art",
//         id: "6",
//         title: "this is a photo"
//     },
//     {
//         url: "https://picsum.photos/id/317/300/300",
//         category: "tech",
//         id: "7",
//         title: "this is a photo"
//     },
//     {
//         url: "https://picsum.photos/id/318/300/300",
//         category: "tech",
//         id: "8",
//         title: "this is a photo"
//     },
//     {
//         url: "https://picsum.photos/id/319/300/300",
//         category: "tech",
//         id: "9",
//         title: "this is a photo"
//     },

//     {
//         url: "https://picsum.photos/id/320/300/300",
//         category: "sport",
//         id: "10",
//         title: "this is a photo"
//     },
//     {
//         url: "https://picsum.photos/id/319/300/300",
//         category: "life",
//         id: "9",
//         title: "this is a photo"
//     },

//     {
//         url: "https://picsum.photos/id/320/300/300",
//         category: "life",
//         id: "10",
//         title: "this is a photo"
//     }
// ]




// let gallery = document.querySelector('.gallery');
// let select = document.querySelector('#photos');

// let options = []

// function addElmant(obj) {
//     console.log(obj);

//     // bu element yaratish "img" elementini yaratyabmiz.
//     let img = document.createElement('img');
//     let option = document.createElement('option');

//     if (!options.includes(obj.category)) {
//         options.push(obj.category)
//         select.append(option);
//     } else {
//         // console.log(obj.category);
//     }


//     option.value = obj.category;
//     option.textContent = obj.category;

//     // img.setAttribute('src', `https://picsum.photos/id/312/300/300`);
//     img.setAttribute('src', `${obj.url}`);
//     img.setAttribute('alt', `${obj.title}`);
//     img.dataset.category = obj.category;
//     gallery.append(img);

// }


// for (let i = 0; i < images.length; i++) {
//     // console.log(images[i]);
//     addElmant(images[i])
// }

// // console.log(options);