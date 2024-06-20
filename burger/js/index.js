"use strict";
// навісити обробник на бургер
// замінити burgerMenuContainerHide на burgerMenuContainerActive

const burgerContainer = document.querySelector(".burgerMenuContainer");
const fullScreen = document.querySelector(".fullScreenOverlay");

burgerContainer.addEventListener("click", changeBurgerVisibility);
fullScreen.addEventListener("click", changeBurgerVisibility);

function changeBurgerVisibility(e) {
  burgerContainer.classList.toggle("burgerMenuContainerActive");
  burgerContainer.classList.toggle("burgerMenuContainerHide");
}
