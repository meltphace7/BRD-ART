"use strict";

/* _______  HEADER-SLIDER ______________*/
const headerSlides = document.querySelectorAll('.header-slide');
const headerSlider = document.querySelector('.header-slider');

let curSlide = 0;
const maxSlide = headerSlides.length - 1;

const goToHeaderSlide = function(slide) {
    headerSlides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
}

goToHeaderSlide(0);

const nextHeaderSlide = function() {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++
    }
    goToHeaderSlide(curSlide);
}

const prevHeaderSlide = function() {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--
    }
    goToHeaderSlide(curSlide);
}

document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowRight') nextHeaderSlide();
    if(e.key === 'ArrowLeft') prevHeaderSlide();
})

setInterval(nextHeaderSlide, 10000);

/* _______  GALLERY-GRID SEARCH PARAMS ______________*/






/* _______  SLIDER ______________*/

// const slides = document.querySelectorAll(".slide");
// const btnNext = document.querySelector(".slider-btn-next");
// const btnPrev = document.querySelector(".slider-btn-prev");
// const dotContainer = document.querySelector(".dot-container");

// let curSlide = 0;
// const maxSlide = slides.length - 1;

// const createDots = function () {
//   slides.forEach((_, i) => {
//     dotContainer.insertAdjacentHTML(
//       "beforeend",
//       `
//       <button class="dot" data-slide="${i}"></button>
//     `
//     );
//   });
// };

// createDots();

// const activateDot = function (slide) {
//   document
//     .querySelectorAll(".dot")
//     .forEach((dot) => dot.classList.remove("dot--active"));

//   document
//     .querySelector(`.dot[data-slide="${slide}"]`)
//     .classList.add("dot--active");
// };

// const goToSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//   );
// };

// goToSlide(0);
// activateDot(0);

// const nextSlide = function () {
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// const prevSlide = function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// btnNext.addEventListener("click", nextSlide);
// btnPrev.addEventListener("click", prevSlide);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowRight") nextSlide();
//   if (e.key === "ArrowLeft") prevSlide();
// });

// dotContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("dot")) {
//     const { slide } = e.target.dataset;

//     goToSlide(slide);
//     activateDot(slide);
//   }
// });
