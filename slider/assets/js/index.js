const slides = [
  {
    src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg",
    alt: "landscape1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    alt: "landscape2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg",
    alt: "landscape3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    alt: "landscape4",
  },
];

// let currentSlideIndex = 0;

// //
// const sliderImg = document.querySelector(".sliderImg");

// sliderImg.src = slides[currentSlideIndex].src;
// sliderImg.alt = slides[currentSlideIndex].alt;

// //
// const [prevBtn, nextBtn] = document.querySelectorAll("button");

// nextBtn.onclick = () => {
//   if (currentSlideIndex < slides.length - 1) {
//     currentSlideIndex++;
//   } else {
//     currentSlideIndex = 0;
//   }

//   console.log(currentSlideIndex);

//   sliderImg.src = slides[currentSlideIndex].src;
//   sliderImg.alt = slides[currentSlideIndex].alt;
// };

// prevBtn.onclick = () => {
//   if (currentSlideIndex > 0) {
//     currentSlideIndex--;
//   } else {
//     currentSlideIndex = slides.length - 1;
//   }

//   sliderImg.src = slides[currentSlideIndex].src;
//   sliderImg.alt = slides[currentSlideIndex].alt;
// };

let currentSlideIndex = 0;

//встановити як початкове нульове зображення
// const sliderImg = document.querySelector(".sliderImg");

updateSlider(currentSlideIndex);

// при натисканні на next відобразити наступне зображення
const [prevBtn, nextBtn] = document.querySelectorAll("button");

nextBtn.onclick = () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

  updateSlider(currentSlideIndex);
};

// при натисканні на prev відобразити попереднє зображення
prevBtn.onclick = () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  updateSlider(currentSlideIndex);
};

function updateSlider(currentIndex) {
  sliderImg.src = slides[currentIndex].src;
  sliderImg.alt = slides[currentIndex].alt;
}

// MVVM -- Model - View - ViewModel (MVC, MVP)
// ViewModel
const sliderImg = document.querySelector(".sliderImg");

const [prevBtn, nextBtn] = document.querySelectorAll("button");

function updateSlider(currentIndex) {
  sliderImg.src = slides[currentIndex].src;
  sliderImg.alt = slides[currentIndex].alt;
}

// try {
//   const slider = new Slider(slides, 1);
//   prevBtn.onclick = () => {
//     slider.decIndex();
//     updateSlider(slider.currentIndex);
//   };
//   nextBtn.onclick = () => {
//     slider.incIndex();
//     updateSlider(slider.currentIndex);
//   };
// } catch (err) {
//   sliderImg.src =
//     "https://cdn.vectorstock.com/i/500p/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg";
//   sliderImg.alt = "unavailable image";
// }

function sliderError() {
  sliderImg.src =
    "https://cdn.vectorstock.com/i/500p/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg";
  sliderImg.alt = "unavailable image";
}

sliderImg.onerror = () => {
  sliderError();
};

try {
  const slider = new Slider(slides, 0);
  updateSlider(slider.currentIndex);

  prevBtn.onclick = () => {
    updateSlider(slider.currentIndex);
  };
} catch (err) {
  sliderError();
}

console.log("after error");
