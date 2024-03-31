const carousel = document.querySelector(".cauresal");
const slidesContainer = document.querySelector(".slider");
const prevButton = document.querySelector(".btn_prev");
const nextButton = document.querySelector(".btn_next");

const slides = Array.from(slidesContainer.children);
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);
