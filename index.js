let log = console.log;

let container = document.querySelector(".container");
let button = document.querySelector("button");
let title = document.querySelector("#title");
let pages = document.querySelector("#pages");

let arr = [];

function Book (tit, page,id) {
     this.title = tit;
      this.pages = page;
      this.id = crypto.randomUUID()
  }


button.addEventListener("click",(e)=>{
  // e.preventDefault();
let harry = new Book (`${title.value}`, `${pages.value}`)
arr.push(harry);
title.value = "";
pages.value = "";
})

