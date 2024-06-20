"use strict";

const heartBtn = document.querySelector("button");

heartBtn.addEventListener("click", heartClickHandler);

function heartClickHandler() {
  this.classList.toggle("redHeart");
}

const artColor = document.querySelector(".art");

artColor.addEventListener("click", artClickHandler);

function artClickHandler() {
  this.classList.toggle("yellowText");
}
