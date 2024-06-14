// обробка подій

// навішування обробника
const signUpBtn = document.querySelector("#signup");
console.dir(signUpBtn);

function eventHandler(event) {
  console.log(event);
  alert("Ви успішно зареєстровані");
}

signUpBtn.onclick = eventHandler;
// скидання обробника
// signUpBtn.onclick = null;

// 2
const loginBtn = document.querySelector("#login");

const loginEventHandler = (e) => alert("You are successfully login");

loginBtn.addEventListener("click", loginEventHandler);
// loginBtn.removeEventListener("click", loginEventHandler);

console.dir(loginBtn);

// При наведенні на заголовок вивести привітання
const h1 = document.querySelector("h1");

h1.onmouseenter = (e) => alert("welcome");
