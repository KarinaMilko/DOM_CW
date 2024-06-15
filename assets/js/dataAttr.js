"use strict";

const loadingButtons = document.querySelectorAll("button");

console.log("loadingButtons[0] :>> ", loadingButtons[0].dataset.host);
console.log("loadingButtons[1] :>> ", loadingButtons[1].dataset.host);

loadingButtons.forEach((btn) => (btn.onclick = loadResource));

function loadResource() {
  // this в обробнику подій - це елемент, для якого подія викликана
  console.log(`Load resource from ${this.dataset.host}`);
  console.log(`Load resource by ${this.dataset.userName}`);
}
// data-userName => dataset.username
// data-user-name => dataset.userName

// Task: в контейнер помістити 4 кнопки
// в залежності від того, на яку натиснули,
// змінювати bg-колір кнопки або контейнера або body

const buttons = document.querySelectorAll("button[data-color]");

buttons.forEach((btn) => (btn.onclick = setBgColor));

function setBgColor() {
  this.style.backgroundColor = this.dataset.color;
}
