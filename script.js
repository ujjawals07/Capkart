"use strict";
console.log("hey");

let menu = document.querySelector("#menu");
let navlist = document.querySelector(".nav_list");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navlist.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navlist.classList.remove("active");
};

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

const home = document.querySelector("#home");
const homesection = document.querySelector("#home-section");

home.addEventListener("click", function () {
  homesection.scrollIntoView({ behavior: "smooth" });
});
const products = document.querySelectorAll("#products");
const products1 = document.querySelector("#products1");
products.forEach(function (p) {
  p.addEventListener("click", function () {
    products1.scrollIntoView({ behavior: "smooth" });
  });
});

const upcoming = document.querySelectorAll("#upcoming");
const products2 = document.querySelector("#products2");
upcoming.forEach(function (u) {
  u.addEventListener("click", function () {
    console.log("yesas");
    products2.scrollIntoView({ behavior: "smooth" });
  });
});

const reviewsection = document.querySelector("#section-review");
const review = document.querySelectorAll("#review");
review.forEach(function (r) {
  r.addEventListener("click", function () {
    reviewsection.scrollIntoView({ behavior: "smooth" });
  });
});
