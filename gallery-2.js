'use-strict'

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