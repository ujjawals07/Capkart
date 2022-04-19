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

const carticon = document.querySelector("#cart-icon");
carticon.addEventListener("click", function () {
  console.log("click");
  document.querySelector(".cart-body").classList.toggle("cart-active");
  document.querySelector(".fav-body").classList.add("fav-active");
});
const favicon = document.querySelector("#fav-icon");
favicon.addEventListener("click", function () {
  document.querySelector(".fav-body").classList.toggle("fav-active");
  document.querySelector(".cart-body").classList.add("cart-active");
});


/* <section class="products2" id="products2">

<h4 class="products-heading"> Upcoming <span>Caps</span> </h1>
      
<div class="cap-box-container">

    <div class="cap-box">
        <div class="icon">
            <a href="#" class="fas fa-heart  ic"></a>
            <a href="#" class="fas fa-share ic"></a>
            <a href="#" class="fas fa-eye ic"></a>
        </div>
        <img src="img/png1 (1).png" alt="" class="cap-img img2">
        <div class="content">
            <h3>Cap sumo</h3>
            <div class="price">$120.99 <span>$150.99</span></div>
            <div class="stars">
                <i class="fas fa-star i3"></i>
                <i class="fas fa-star i3"></i>
                <i class="fas fa-star i3"></i>
                <i class="fas fa-star i3"></i>
                <i class="far fa-star i3"></i>
            </div>
            <a  type="button"  class="btn-cart">add to cart</a>
        </div>
    </div>

    <div class="cap-box">
        <div class="icon">
            <a href="#" class="fas fa-heart ic"></a>
            <a href="#" class="fas fa-share ic"></a>
            <a href="#" class="fas fa-eye ic"></a>
        </div>
        <img src="img/png2.png" alt="" class="cap-img img2"> 
        <div class="content">
            <h3>Cap roma</h3>
            <div class="price">$120.99 <span>$150.99</span></div>
            <div class="stars">
                <i class="fas fa-star i3"></i>
                <i class="fas fa-star i3"></i>
                <i class="fas fa-star i3"></i>
                <i class="fas fa-star i3"></i>
                <i class="far fa-star i3"></i>
            </div>
            <a  type="button"  class="btn-cart">add to cart</a>
        </div>
    </div>
    <div class="cap-box">
      <div class="icon">
          <a href="#" class="fas fa-heart ic"></a>
          <a href="#" class="fas fa-share ic"></a>
          <a href="#" class="fas fa-eye ic"></a>
      </div>
      <img src="img/png3.png" alt="" class="cap-img img2"> 
      <div class="content">
          <h3>Cap Puma</h3>
          <div class="price">$120.99 <span>$150.99</span></div>
          <div class="stars">
              <i class="fas fa-star i3"></i>
              <i class="fas fa-star i3"></i>
              <i class="fas fa-star i3"></i>
              <i class="fas fa-star i3"></i>
              <i class="far fa-star i3"></i>
          </div>
          <a type="button" class="btn-cart">add to cart</a>
      </div>
  </div>
  <div class="cap-box">
    <div class="icon">
        <a href="#" class="fas fa-heart ic"></a>
        <a href="#" class="fas fa-share ic"></a>
        <a href="#" class="fas fa-eye ic"></a>
    </div>
    <img src="img/png4.png" alt="" class="cap-img img2"> 
    <div class="content">
        <h3>Cap Monk</h3>
        <div class="price">$120.99 <span>$150.99</span></div>
        <div class="stars">
            <i class="fas fa-star i3"></i>
            <i class="fas fa-star i3"></i>
            <i class="fas fa-star i3"></i>
            <i class="fas fa-star i3"></i>
            <i class="far fa-star i3"></i>
        </div>
        <a  type="button"  class="btn-cart">add to cart</a>
    </div>
</div>
<div class="cap-box">
  <div class="icon">
      <a href="#" class="fas fa-heart ic"></a>
      <a href="#" class="fas fa-share ic"></a>
      <a href="#" class="fas fa-eye ic"></a>
  </div>
  <img src="img/army.png" alt="" class="cap-img img2"> 
  <div class="content">
      <h3>Cap army</h3>
      <div class="price">$120.99 <span>$150.99</span></div>
      <div class="stars">
          <i class="fas fa-star i3"></i>
          <i class="fas fa-star i3"></i>
          <i class="fas fa-star i3"></i>
          <i class="fas fa-star i3"></i>
          <i class="far fa-star i3"></i>
      </div>
      <a  type="button"  class="btn-cart">add to cart</a>
  </div>
</div>
<div class="cap-box">
<div class="icon">
    <a href="#" class="fas fa-heart ic"></a>
    <a href="#" class="fas fa-share ic"></a>
    <a href="#" class="fas fa-eye ic"></a>
</div>
<img src="img/png5.png" alt="" class="cap-img img2"> 
<div class="content">
    <h3>Cap star</h3>
    <div class="price">$120.99 <span>$150.99</span></div>
    <div class="stars">
        <i class="fas fa-star i3"></i>
        <i class="fas fa-star i3"></i>
        <i class="fas fa-star i3"></i>
        <i class="fas fa-star i3"></i>
        <i class="far fa-star i3"></i>
    </div>
    <a  type="button"  class="btn-cart">add to cart</a>
</div>
</div>
  </div>
  </section>
  
  
         <div class="cap-box">
              <div class="icon">
                  <a href="#" class="fas fa-heart  ic"></a>
                  <a href="#" class="fas fa-share ic"></a>
                  <a href="#" class="fas fa-eye ic"></a>
              </div>
              <img src="img/cap6.jpg" alt="" class="cap-img">
              <div class="content">
                  <h3>Cap cobra</h3>
                  <div class="price">$120.99 <span>$150.99</span></div>
                  <div class="stars">
                      <i class="fas fa-star i3"></i>
                      <i class="fas fa-star i3"></i>
                      <i class="fas fa-star i3"></i>
                      <i class="fas fa-star i3"></i>
                      <i class="far fa-star i3"></i>
                  </div>
                <button type="button" class="btn-cart">Add to Cart</button>
              </div>
          </div>
  
          <div class="cap-box">
              <div class="icon">
                  <a href="#" class="fas fa-heart ic"></a>
                  <a href="#" class="fas fa-share ic"></a>
                  <a href="#" class="fas fa-eye ic"></a>
              </div>
              <img src="img/cap5.jpg" alt="" class="cap-img"> 
              <div class="content">
                  <h3>Cap Adidas</h3>
                  <div class="price">$120.99 <span>$150.99</span></div>
                  <div class="stars">
                      <i class="fas fa-star i3"></i>
                      <i class="fas fa-star i3"></i>
                      <i class="fas fa-star i3"></i>
                      <i class="fas fa-star i3"></i>
                      <i class="far fa-star i3"></i>
                  </div>
                  <button type="button" class="btn-cart">Add to Cart</button>
              </div>
          </div>
          <div class="cap-box">
            <div class="icon">
                <a href="#" class="fas fa-heart ic"></a>
                <a href="#" class="fas fa-share ic"></a>
                <a href="#" class="fas fa-eye ic"></a>
            </div>
            <img src="img/cap4.jpg" alt="" class="cap-img"> 
            <div class="content">
                <h3>Cap Puma</h3>
                <div class="price">$120.99 <span>$150.99</span></div>
                <div class="stars">
                    <i class="fas fa-star i3"></i>
                    <i class="fas fa-star i3"></i>
                    <i class="fas fa-star i3"></i>
                    <i class="fas fa-star i3"></i>
                    <i class="far fa-star i3"></i>
                </div>
                <button type="button" class="btn-cart">Add to Cart</button>
            </div>
        </div>
        <div class="cap-box">
          <div class="icon">
              <a href="#" class="fas fa-heart ic"></a>
              <a href="#" class="fas fa-share ic"></a>
              <a href="#" class="fas fa-eye ic"></a>
          </div>
          <img src="img/cap3.jpg" alt="" class="cap-img"> 
          <div class="content">
              <h3>Cap Monkey</h3>
              <div class="price">$120.99 <span>$150.99</span></div>
              <div class="stars">
                  <i class="fas fa-star i3"></i>
                  <i class="fas fa-star i3"></i>
                  <i class="fas fa-star i3"></i>
                  <i class="fas fa-star i3"></i>
                  <i class="far fa-star i3"></i>
              </div>
              <button type="button" class="btn-cart">Add to Cart</button>
          </div>
      </div>
      <div class="cap-box">
        <div class="icon">
            <a href="#" class="fas fa-heart ic"></a>
            <a href="#" class="fas fa-share ic"></a>
            <a href="#" class="fas fa-eye ic"></a>
        </div>
        <img src="img/cap2.jpg" alt="" class="cap-img"> 
        <div class="content">
            <h3>Cap Calvine</h3>
            <div class="price">$120.99 <span>$150.99</span></div>
            <div class="stars">
                <i class="fas fa-star i3"></i>
                <i class="fas fa-star i3"></i>
                <i class="fas fa-star i3"></i>
                <i class="fas fa-star i3"></i>
                <i class="far fa-star i3"></i>
            </div>
            <button type="button" class="btn-cart">Add to Cart</button>
        </div>
    </div>
    <div class="cap-box">
      <div class="icon">
          <a href="#" class="fas fa-heart ic"></a>
          <a href="#" class="fas fa-share ic"></a>
          <a href="#" class="fas fa-eye ic"></a>
      </div>
      <img src="img/cap1.jpg" alt="" class="cap-img"> 
      <div class="content">
          <h3>Cap roadstar</h3>
          <div class="price">$120.99 <span>$150.99</span></div>
          <div class="stars">
              <i class="fas fa-star i3"></i>
              <i class="fas fa-star i3"></i>
              <i class="fas fa-star i3"></i>
              <i class="fas fa-star i3"></i>
              <i class="far fa-star i3"></i>
          </div>
          <a  type="button"  class="btn-cart">add to cart</a>
      </div>
  </div>
  
     <a id="close-cart" class="btn-home">Back To Home ↩</a>
    <div class="cart_container">
      <h8 class="cart-title">Your cart</h8>
      <div class="cart"> 
      
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="sass\main.css" />
    <title>The Pizza Show</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Document</title>
  </head>

  <body class="cart-body">
    <a id="close-cart" class="btn-home">Back To Home ↩</a>
        <div class="cart-container">
          <div class="cart-box">
            <img src="img/army.png" alt="" class="cart-pic" />
            <div class="cart-details">
              <p class="cart-item">cap army</p>
              <div class="cart-price">$25</div>
              <input type="number" value="1" class="cart-quantity" />
            </div>
            <div class="delet">Remove</div>
          </div>
          <div class="cart-box">
            <img src="img/army.png" alt="" class="cart-pic" />
            <div class="cart-details">
              <p class="cart-item">cap army</p>
              <div class="cart-price">$70</div>
              <input type="number" value="1" class="cart-quantity" />
            </div>
            <div class="delet">Remove</div>
          </div>
    
        <div class="total">
          <div class="total-title">Total</div>
          <div class="total-price">$00</div>
        </div>
        <button class="btn-buy">Buy now</button>
      </div>
    </div>
    </body>

   
    <script defer src="close.js"></script>
<script src="common.js" async></script>
  </body>
</html>*/
