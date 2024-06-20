"use strict";

const innerDivEl = document.querySelector(".innerDiv");
const outerDivEl = document.querySelector(".outerDiv");

// сплиття - по дефолту - inner outer body
innerDivEl.addEventListener("click", handler);
outerDivEl.addEventListener("click", handler);
document.body.addEventListener("click", handler);

// занурення - { capture: true } - body, outerDov, innerDiv
innerDivEl.addEventListener("click", handler, { capture: true });
outerDivEl.addEventListener("click", handler, { capture: true });
document.body.addEventListener("click", handler, { capture: true });

function handler(e) {
  console.log("this :>> ", this); // елемент, на якому виконується обробник
  //   console.log("e.target :>> ", e.target); // найбільш заглиблений елемент, відбулася подія (наприклад, клікнули мишкою)
  //   console.log("e.currentTarget :>> ", e.currentTarget); // елемент, на якому виконується обробник
}

let clickCounter = 0;

document.body = addEventListener("click", clickHandler, { capture: true });

function clickHandler(e) {
  clickCounter++;
  console.log("clickCounter :>> ", clickCounter);
  e.stopPropagation(); // зупинити розповсюдження події
}
