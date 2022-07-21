console.log("hi");
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
let removebtn = document.getElementsByClassName("delet");

function ready() {
  for (let i = 0; i < removebtn.length; i++) {
    let rm = removebtn[i];
    rm.addEventListener("click", function (event) {
      removeitem();
    });
  }
  let inputchange = document.querySelectorAll(".cart-quantity");
  inputchange.forEach(function (i) {
    i.addEventListener("change", quantitychange);
  });
  let addtocartbtn = document.getElementsByClassName("btn-cart");
  for (let i = 0; i < addtocartbtn.length; i++) {
    const button = addtocartbtn[i];
    button.addEventListener("click", chomu);
  }

  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyclicked);
}

function buyclicked() {
  alert("thank you  for shopping");
  let cartcontainer = document.getElementsByClassName("cart-container")[0];
  while (cartcontainer.hasChildNodes()) {
    cartcontainer.removeChild(cartcontainer.firstChild);
  }
  updatecartprice();
}
function removeitem(event) {
  let buttonclicked = event.target;
  buttonclicked.parentElement.remove();

  updatecartprice();
}

function chomu(event) {
  let button = event.target;
  let shop = button.parentElement;
  let title = shop.getElementsByClassName("product")[0].innerText;
  let price = shop.getElementsByClassName("price")[0].innerText;
  let productimg = shop.getElementsByClassName("cap-img")[0].src;
  addtoproduct(title, price, productimg);
  updatecartprice();
}
function addtoproduct(title, price, productimg) {
  let cartbox = document.createElement("div");
  cartbox.classList.add("cart-box");
  //cartbox.innerText = title;
  let cartcontainerbox = document.getElementsByClassName("cart-container")[0];
  let productname = cartcontainerbox.getElementsByClassName("cart-item");
  for (let i = 0; i < productname.length; i++) {
    if (productname[i].innerText == title) {
      alert("alredy added");
      return;
    }
  }

  let cartinnerhtml = `
    <img src="${productimg}" alt="" class="cart-pic" />
    <div class="cart-details">
      <p class="cart-item">${title}</p>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity" />
    </div>
    <div class="delet">Remove</div>`;
  cartbox.innerHTML = cartinnerhtml;
  cartcontainerbox.append(cartbox);
  cartbox
    .getElementsByClassName("delet")[0]
    .addEventListener("click", removeitem);
  cartbox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantitychange);
}

function quantitychange(event) {
  inputq = event.target;
  if (isNaN(inputq.value) || inputq.value <= 0) {
    inputq.value = 1;
  }
  updatecartprice();
}

function updatecartprice() {
  let cartcontainer = document.getElementsByClassName("cart-container")[0];
  let cartbox = cartcontainer.getElementsByClassName("cart-box");
  let total = 0;
  for (let i = 0; i < cartbox.length; i++) {
    let cartboxes = cartbox[i];
    let cartprice = cartboxes.getElementsByClassName("cart-price")[0];

    let cartvalue = cartboxes.getElementsByClassName("cart-quantity")[0];

    let price = parseFloat(cartprice.innerText.replace("$", ""));
    let quantity = cartvalue.value;
    total = total + price * quantity;
    console.log(total);
  }
  total = Math.round(total * 100) / 100;
  let a = (document.getElementsByClassName("total-price")[0].innerText =
    "$" + total);
  console.log(a);
}


/*<nav class="nav_list active" id="navlistactive">
        <li class="nav-items">Home</li>
        <li class="nav-items" id="products">Products</li>
        <li class="nav-items" id="upcoming">Upcoming</li>
        <li class="nav-items" id="review">Review</li>
      </nav>
      
      
      
      .nav {
  &_list {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  &-items {
    margin: 0 2.5rem;
    list-style: none;
    font-size: 1.2rem;
    font-family: sans-serif;
    font-weight: 500;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;

    &:hover {
      color: goldenrod;
    }
  }
}


@media (max-width: 800px) {
  html {
    font-size: 65%;
  }
  #menu {
    display: block;
  }

  header .nav_list {
    position: absolute;
    top: 10%;
    left: -120%;
    width: 100%;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    z-index: 6000;
    //display: none;
  }
  header .nav_list.active {
    left: 0;
  }
  header .nav-items {
    padding: 1.3rem;
    list-style: none;
    font-size: 1.2rem;
    font-family: sans-serif;
    font-weight: 500;
    cursor: pointer;
    // display: inline-block;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.269);
    z-index: 6000;
    &:hover {
      color: goldenrod;
    }
  }
}
*/