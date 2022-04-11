"use strict";

const form = document.getElementById("my-form");
const formStatus = document.querySelector(".form-status");
const cartIcon = document.querySelector(".cart-icon");
const cartItemsBadgeNum = document.querySelector(".cart-items-badge-num");
const mobileBadgeNum = document.querySelector(".mobile-cart-items-badge-num");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      formStatus.classList.remove("form-status-error");
      formStatus.classList.add("form-status-success");
      status.innerHTML = "Message Sent Succesfully!";
      form.reset();
    })
    .catch((error) => {
      formStatus.classList.remove("form-status-success");
      formStatus.classList.add("form-status-error");
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}

form.addEventListener("submit", handleSubmit);


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