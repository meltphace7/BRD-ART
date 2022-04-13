'use-strict'

const header = document.querySelector(".header");
const mobileNav = document.querySelector(".mobile-nav-menu");
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
};
calcItems();

/* _______  STICKY NAV ______________*/

const addStickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    mobileNav.classList.add("sticky");
  } else {
    mobileNav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(addStickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);