"use strict";

const h1 = document.querySelector(".h1");
h1.onclick = () => h1.classList.toggle("h1");

const task1El = document.querySelector("#task1");

task1El.addEventListener("click", doneTaskHandler);

function doneTaskHandler(e) {
  // this.style.textDecoration = "line-through";
  // класи - рядок з іменами класів, розділеними пробілами
  // this.className = this.className + " doneTask"; - вручну погано

  // classList - add remove toggle replace contains
  this.classList.toggle("doneTask");
  this.classList.replace("redTask", "greenTask");
}
