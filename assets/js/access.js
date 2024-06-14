// доступ до елементів
console.log("document :>> ", document);

// прямий доступ
console.dir(document);

console.log("document.body :>> ", document.body);

// getElement(s)By
console.log(
  'document.getElementsByTagName("h1") :>> ',
  document.getElementsByTagName("h1")
);

console.log(document.getElementsByTagName("section"));

console.log(document.getElementById("root"));

// querySelector(All)
const h1 = document.querySelector("h1");
console.dir(h1);
h1.textContent = "Another content";

const sectionEls = document.querySelectorAll(".news");

console.log(sectionEls);

console.log(sectionEls[0]);
console.log(sectionEls[1]);

const [section1, section2] = document.querySelectorAll(".news");
console.log("section1 :>> ", section1);

const root = document.querySelector("#root");
console.dir(root);
