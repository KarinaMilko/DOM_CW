"use strict";

const newsItem = {
  title: "News Title",
  body: "News Body News Body News Body News Body News Body News Body News Body News Body ",
};

// create
const articleEl = document.createElement("article");
// articleEl.textContent = "News Item body";
// articleEl.style.color = "grey";

const h3El = document.createElement("h3");
h3El.textContent = newsItem.title;
articleEl.append(h3El);

const pEl = document.createElement("p");
// p додати в розмітку
pEl.textContent = newsItem.body;
articleEl.append(pEl);

// add to html
const sectionEl = document.querySelector(".section");
sectionEl.append(articleEl);
//////////////////////////////////////////////////////////

// додати в розмітку дату

const sectionEl = document.querySelector(".section");
// create
const articleEl = document.createElement("article");
sectionEl.append(articleEl);
// p додати в розмітку
const h3El = createNewElement("h3", newsItem.title);
const pEl = createNewElement("p", newsItem.body);
const dateEl = createNewElement("p", newsItem.date);
articleEl.append(h3El, pEl, dateEl);
// add to html
function createNewElement(type, content) {
  const newElement = document.createElement(type);
  newElement.textContent = content;
  return newElement;
}
