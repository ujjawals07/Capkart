"use strict";

let favremovebtn = document.getElementsByClassName("fav-remove");
let u = document.getElementsByClassName("fav-box");

for (let i = 0; i < favremovebtn.length; i++) {
  const frm = favremovebtn[i];
  frm.addEventListener("click", function (event) {
    let remove = event.target;
    remove.parentElement.remove();
  });
}

let addtofav = document.getElementsByClassName("ic");
for (let i = 0; i < addtofav.length; i++) {
  const button = addtofav[i];
  button.addEventListener("click", function (event) {
    let button = event.target;
    let shop = button.parentElement.parentElement;
    let title = shop.getElementsByClassName("product")[0].innerText;
    let price = shop.getElementsByClassName("price")[0].innerText;
    let productimg = shop.getElementsByClassName("cap-img")[0].src;
    add(title, price, productimg);
  });
}
function add(title, price, productimg) {
  let favbox = document.createElement("div");
  favbox.classList.add("fav-box");
  let favcontainerbox = document.getElementsByClassName("fav-container")[0];
  let productname = favcontainerbox.getElementsByClassName("fav-item-name");
  for (let i = 0; i < productname.length; i++) {
    if (productname[i].innerText == title) {
      alert("alredy added");
      return;
    }
  }

  let favinnerhtml = `
      <img src="${productimg}" alt="" srcset="" class="fav-img">
      <div class="fav-details">
        <p class="fav-item-name">${title}</p>
        <div class="fav-price">${price}</div>
      </div>
      <div class="fav-remove">remove</div>
    
       `;
  favbox.innerHTML = favinnerhtml;
  favcontainerbox.append(favbox);
  favbox
    .getElementsByClassName("fav-remove")[0]
    .addEventListener("click", function (event) {
      let remove = event.target;
      remove.parentElement.remove();
    });
}
