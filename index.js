// "use strict";

function show() {
    console.log(this === undefined);
}

show(); // true
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

// your JavaScript file
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// const paragraph = document.createElement("p");
// paragraph.textContent = "Hey, I'm red!";
// paragraph.style.color = "red";
// container.appendChild(paragraph);

// const headingThree = document.createElement("h3");
// headingThree.textContent = "I'm a blue h3!";
// headingThree.style.color = "blue";
// container.appendChild(headingThree);

// const newContainer = document.createElement("div");
// newContainer.classList.add("border","fresh");
// container.appendChild(newContainer);

// const anotherHeading = document.createElement("h1");
// anotherHeading.textContent = "I'm a h1 in a div!";
// newContainer.appendChild(anotherHeading);

// const anotherParagraph = document.createElement("p");
// anotherParagraph.textContent = "ME TOO!";
// anotherParagraph.style.color = "green";
// newContainer.appendChild(anotherParagraph);

// const anothersParagraph = document.createElement("p");
// anothersParagraph.textContent = "ME TOO!";
// anothersParagraph.style.color = "green";
// newContainer.appendChild(anothersParagraph);

// // the JavaScript file
// const btnn = document.querySelector("#btnn");
// btnn.onclick = () => alert("Hello World");


// // the JavaScript file
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });


// btn.addEventListener("click", function (e) {
//   console.log(e.target);
//   e.target.style.background = "blue";
// });


// // buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll("button");

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });

// console.log("hi")
// function camelize(str){
//    let arr = str.split("-")

// let fillString = []
// for(let i = 0 ; i < arr.length ; i++){
    
//     if(i === 0){
//         fillString.push(arr[i].toLowerCase()) ;
//     }
//     else if(i>0){
//         let actioned = arr[i].at(0).toUpperCase() + arr[i].slice(1)
//         fillString.push(actioned) ; 
//     }
// }
// return fillString.join("");

// }

// function filterRange(arr, min, max){

//      if(min > max){
//         let temp = min;
//         max = min;
//         min = temp;
//     }
// let newArr = []
//     for (let i = 0; i < arr.length; i++){
//    if(arr[i] >= min && arr[i]<=max){
// newArr.push(arr[i])
//    }
// }
// return newArr;

// }

// function filterRangeInPlace(arr, min, max){

//      if(min > max){
//         let temp = min;
//         max = min;
//         min = temp;
//     }

//     for (let i = 0; i < arr.length; i++){
//    if(arr[i] < min || arr[i]>max){
// arr.splice(i,1)
//    }
// }
// return arr;

// }


// let arr = ["HTML", "javaScript","Java", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)



// let copy = [...arr];
// console.log(copy)

// let sorted = copy.sort((a,b) => a.localeCompare(b, {sensitive:"base"}));
// console.log(sorted)

"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function Book (title, author, pages, readNotRead){
    if(!new.target){
        throw Error("You must use the new keyword to call the constructor");
        
    }
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.readNotRead = readNotRead;
    this.info = function(){
        return`${this.title} by ${this.author}, ${this.pages} pages ${this.readNotRead}`
    }
}

const theHobit = new Book("The Hobbit", "J.R.R Tolkien", "295", "not read yet")
console.log(theHobit.info())

console.log(theHobit)

Object.getPrototypeOf(theHobit) === Book.prototype; // returns true

let animal = {
  eats: true,
  party: "yaaas!"
};
let rabbit = {
  jumps: true,
  food: "cabbage",
  car: false,
   __proto__: animal
};

console.log(Object.keys(rabbit))
for(let looper in rabbit){
  let ownProp = rabbit.hasOwnProperty(looper);

  if(ownProp){
    console.log(`Own: ${looper}`)
  }
  else {
    if(!ownProp){
    console.log(`Inherited: ${looper}`)
  }
  }
}

// Object.setPrototypeOf(rabbit, animal)

// console.log(Object.getPrototypeOf(rabbit))
// console.log(animal.jumps)

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); 

console.log(crypto.randomUUID())