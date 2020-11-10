$(document).ready(function () {
  $('.feature-carousel-section__glider').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 600,
      settings: {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
      }
    }, ]
  });
});


let buttonTab1 = document.getElementById("feature-shop-selection-section__tab-button-1");
let buttonTab2 = document.getElementById("feature-shop-selection-section__tab-button-2");

let tab1 = document.getElementById("feature-shop-selection-section__tab1");
let tab2 = document.getElementById("feature-shop-selection-section__tab2");

let parag1 = document.getElementById("feature-shop-selection-section__text1");
let parag2 = document.getElementById("feature-shop-selection-section__text2");


buttonTab1.addEventListener('click', turnOnTab1);
buttonTab2.addEventListener('click', turnOnTab2);

function turnOnTab1() {
  tab1.classList.remove("selected-item-hidden");
  tab2.classList.add("selected-item-hidden");

  parag1.classList.add("underline-active");
  parag2.classList.remove("underline-active");
}

function turnOnTab2() {
  tab2.classList.remove("selected-item-hidden");
  tab1.classList.add("selected-item-hidden");

  parag1.classList.remove("underline-active");
  parag2.classList.add("underline-active");
}


let xx = document.querySelector(".feature-carousel-section__thumbnail");

xx.addEventListener('click', rrr);

function rrr() {
  console.log("red");
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"

