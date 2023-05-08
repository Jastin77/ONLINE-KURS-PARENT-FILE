'use strict';

let array = [{
        url: "https://picsum.photos/id/301/300/300",
        name: "gallery",
        id: "1",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/302/300/300",
        name: "gallery",
        id: "2",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/304/300/300",
        name: "neture",
        id: "3",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/304/300/300",
        name: "neture",
        id: "4",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/305/300/300",
        name: "history",
        id: "5",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/306/300/300",
        name: "history",
        id: "6",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/307/300/300",
        name: "sea",
        id: "7",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/308/300/300",
        name: "sea",
        id: "8",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/309/300/300",
        name: "music",
        id: "9",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/310/300/300",
        name: "music",
        id: "10",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/309/300/300",
        name: "flowers",
        id: "11",
        title: "first image"
    },
    {
        url: "https://picsum.photos/id/310/300/300",
        name: "flowers",
        id: "12",
        title: "first image"
    }

]


let options = []

let pictures = document.querySelector('.pictures');
let selectors = document.querySelector('#selectors');


function addImg(obj1) {
    console.log(obj1);

    let img1 = document.createElement('img');
    let option = document.createElement('option');

    if (!options.includes(obj1.name)) {
        options.push(obj1.name);
        selectors.append(option);
    } else {
        // console.log(obj1.name);
    }


    option.value = obj1.name;
    option.textContent = obj1.name;


    img1.setAttribute("src", `${obj1.url}`);
    img1.setAttribute("alt", `${obj1.title}`);
    img1.dataset.name = obj1.name;
    pictures.append(img1);

}

for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);

    addImg(array[i])

}