// Task: При натисканні на кнопку:

// Отримати заголовок першого рівня
//   і встановити для нього інший колір тла.
// * Виставити для заголовків другого рівня розмір шрифта 20px і їх колір.

// Встановити src i alt, розміри для головного зображення.
// * Встановити src i alt, розміри для зображень в кожному атіклі.

// Алгоритм:
// 1 Отримати посилання на кнопку
// 2 Задати функцію обробник і навісити її
//   як обробник події на click
// 3 Прописати функціонал цього обробника
//   Отримати посилання на h1
//   встановити для h1 колір тла
//   ...

const imgAttr = {
  src: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg",
  alt: "cat",
};

const eventBtn = document.querySelector("button");
const h1 = document.querySelector("h1");
const h2Els = document.querySelectorAll("h2");
const someImg = document.querySelector(".mainImg");
const imgs = document.querySelectorAll(".sectionImage");

function eventHandler(event) {
  h1.style.backgroundColor = "green";

  someImg.src =
    "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg";
  someImg.alt = "cat";

  // *
  // оскільки є symbol.iterator, то працюватиме for..of
  for (const h2 of h2Els) {
    h2.setAttribute("style", "font-size: 20px; color: red");
  }
  // також в прототипі є forEach
  imgs.forEach((e) => {
    e.src = imgAttr.src;
    e.alt = imgAttr.alt;
    e.style.width = "200px";
    e.style.height = "100px";
    e.style.objectFit = "cover";
  });
}

eventBtn.onclick = eventHandler;
