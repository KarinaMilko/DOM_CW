"use strict";

const heartBtn = document.querySelector("button");

heartBtn.addEventListener("click", heartClickHandler);

function heartClickHandler(e) {
  this.classList.toggle("redHeart");
  e.stopPropagation();
}
// реалізувати обробник на статті, щоб вона при кліку міняла колір

const articleEl = document.querySelector("article");

articleEl.addEventListener("click", backgroundChangeHendler);
function backgroundChangeHendler() {
  this.classList.toggle("background");
}
