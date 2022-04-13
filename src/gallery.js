"use strict";


const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.slider-btn-next')
const btnPrev = document.querySelector('.slider-btn-prev')
const sliderBtnNext = document.querySelector('.slider-btn-next')
const sliderBtnPrev = document.querySelector('.slider-btn-prev')
const mobileSliderBtnNext = document.querySelector(".mobile-slider-btn-next");
const mobileSliderBtnPrev = document.querySelector(".mobile-slider-btn-prev");
const cartIcon = document.querySelector(".cart-icon");
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
  ;
};
calcItems();

/* _______  IMAGE - SLIDER ______________*/

let curSlide;
const maxSlide = slides.length - 1;

const goToSlide = function(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
}

goToSlide(0);

const nextSlide = function() {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++
    }
    goToSlide(curSlide)
};

const prevSlide = function() {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--
    }
    goToSlide(curSlide)
};

sliderBtnNext.addEventListener('click', nextSlide)
sliderBtnPrev.addEventListener('click', prevSlide)
mobileSliderBtnNext.addEventListener("click", nextSlide);
mobileSliderBtnPrev.addEventListener("click", prevSlide);

document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') prevSlide();
    if(e.key === 'ArrowRight') nextSlide();
})

/* ________ SEARCH PARAMS ____________ */

const getImgId = function(parameterName) {
    const imgID = new URLSearchParams(window.location.search)
    return imgID.get(parameterName)
}

let imgID = getImgId('img');
console.log(imgID);

if (imgID === 'azures') {
    goToSlide(0)
    curSlide = 0;
}

if (imgID === 'hannya') {
    goToSlide(1)
    curSlide = 1;
}

if (imgID === 'shaman') {
    goToSlide(2)
    curSlide = 2;
}

if (imgID === 'tibetan-skull') {
    goToSlide(3)
    curSlide = 3;
}

if (imgID === 'native') {
    goToSlide(4)
    curSlide = 4;
}

if (imgID === 'barong') {
    goToSlide(5)
    curSlide = 5;
}

if (imgID === 'mushroom-man') {
    goToSlide(6)
    curSlide = 6;
}

if (imgID === 'apple-head') {
    goToSlide(7)
    curSlide = 7;
}

if (imgID === 'chief') {
    goToSlide(8)
    curSlide = 8;
}

if(imgID === 'beast') {
    goToSlide(9)
    curSlide = 9;
}

if(imgID === 'interdemensional-being') {
    goToSlide(10)
    curSlide = 10;
}

if(imgID === 'rage') {
    goToSlide(11)
    curSlide = 11;
}

if(imgID === 'schitzoid') {
    goToSlide(12)
    curSlide = 12;
}

if(imgID === 'alien-lord') {
    goToSlide(13)
    curSlide = 13
}

if(imgID === 'glub') {
    goToSlide(14)
    curSlide = 14;
}

if(imgID === 'traveler') {
    goToSlide(15)
    curSlide = 15;
}

if(imgID === 'emporer') {
    goToSlide(16)
    curSlide = 16;
}

if(imgID === 'fungoid') {
    goToSlide(17);
    curSlide = 17;
}

if(imgID === 'psylias') {
    goToSlide(18);
    curSlide = 18;
}

if(imgID === 'apple-sun') {
    goToSlide(19);
    curSlide = 19;
}

if(imgID === 'slave') {
    goToSlide(20);
    curSlide = 20;
}

if(imgID === 'cyborg') {
    goToSlide(21);
    curSlide = 21;
}

if(imgID === 'glorb') {
    goToSlide(22)
    curSlide = 22;
}

if(imgID === 'kaos') {
    goToSlide(23);
    curSlide = 23;
}

if(imgID === 'skullet') {
    goToSlide(24);
    curSlide = 24;
}

if(imgID === 'gate-keeper') {
    goToSlide(25);
    curSlide = 25;
}

if(imgID === 'izz') {
    goToSlide(26);
    curSlide = 26;
}

if(imgID === 'jackalope') {
    goToSlide(27);
    curSlide = 27;
}

if(imgID === 'skreetch') {
    goToSlide(28);
    curSlide = 28;
}

if(imgID === 'jahko') {
    goToSlide(29);
    curSlide = 29;
}

if(imgID === 'effer') {
    goToSlide(30);
    curSlide = 30;
}

if(imgID === 'ocean-man') {
    goToSlide(31);
    curSlide = 31;
}

if(imgID === 'earth-man') {
    goToSlide(32);
    curSlide = 32;
}

if(imgID === 'wizeau') {
    goToSlide(33);
    curSlide = 33;
}

if(imgID === 'jelly-mon') {
    goToSlide(34);
    curSlide = 34;
}

if(imgID === 'king-kruster') {
    goToSlide(35);
    curSlide = 35;
}

if(imgID === 'rasta-gnome') {
    goToSlide(36);
    curSlide = 36;
}

if(imgID === 'beetus') {
    goToSlide(37);
    curSlide = 37;
}

if(imgID === 'skoral') {
    goToSlide(38);
    curSlide = 38;
}