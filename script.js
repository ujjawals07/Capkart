"use strict";
console.log("hey");

let menu = document.querySelector("#menu");
let navlist = document.querySelector(".nav_list");

/*menu.addEventListener("click", function () {
  console.log("click");
  menu.classList.toggle("fa-times");
  navlist.classList.toggle("active");
});*/

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navlist.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navlist.classList.remove("active");
};
