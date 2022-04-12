"use strict";

const headerSlides = document.querySelectorAll('.header-slide');
const headerSlider = document.querySelector('.header-slider');
const cartIcon = document.querySelector('.cart-icon')
const cartItemsBadgeNum = document.querySelector(".cart-items-badge-num");
const mobileBadgeNum = document.querySelector(".mobile-cart-items-badge-num");

/* _______  CART-BADGE ______________*/
let cart = JSON.parse(localStorage.getItem("CART")) || [];
if (cart.length >= 1) {
  cartIcon.style.fill = "rgb(60, 215, 60)";
}

const calcItems = function () {
    const totalItems = cart.reduce((acc, cur) => acc + cur.unit, 0);
  mobileBadgeNum.innerHTML = `${totalItems}`;
  cartItemsBadgeNum.innerHTML = `${totalItems}`;
};
calcItems();


/* _______  HEADER-SLIDER ______________*/
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





