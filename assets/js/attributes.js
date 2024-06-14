// Атрибути

const h1 = document.querySelector("h1");
console.dir(h1);

// атрибути елементів - це властивості відповідних об'єктів
h1.title = "It`s heading";

h1.style.backgroundColor = "green";
h1.style.color = "yellow";

// булеві атрибути
// h1.hidden = true;

// вивести id у signup
const btn = document.querySelector("#signup");
// alert(btn.id);

// Через методи
const [section1] = document.querySelectorAll(".news");
section1.setAttribute("title", "Section");
section1.setAttribute(
  "style",
  "border: 1px solid red; background-color: lightblue"
);

// section1.setAttribute("hidden", "hidden");

console.log(section1.getAttribute("style"));

h1.textContent = "<span>new head</span>";
section1.innerHTML = "<span>new head</span>";

// Додати вміст новини в розмітку
const news = {
  title: "News title",
  body: "Some news body",
};

// const newsTitleEl = document.querySelector("#newsTitle");
// newsTitleEl.textContent = news.title;

// const newsBodyEl = document.querySelector("#newsBody");
// newsBodyEl.textContent = news.body;

// article.innerHtml
const article = document.querySelector("#newsItem");

article.innerHTML = `
  <h2>${news.title}</h2>
  <p>${news.body}</p>
`;

// Задати атрибути зображення по об'єкту
const imgAttr = {
  src: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg",
  alt: "cat",
};

const catImgEl = document.querySelector("#catImg");
catImgEl.src = imgAttr.src;
catImgEl.alt = imgAttr.alt;
catImgEl.style.width = "300px";

catImgEl.onmouseenter = (e) => {
  catImgEl.style.width = "350px";
};

catImgEl.onmouseleave = (e) => {
  catImgEl.style.width = "300px";
};
