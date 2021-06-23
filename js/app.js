"use strict";

const hamburgerBtn = document.querySelector(".navbar__hamburger-btn");
const mobileNav = document.querySelector(".navbar__nav");


hamburgerBtn.addEventListener("click", () =>{
    if (!mobileNav.classList.contains("navbar__nav--active")) {
        hamburgerBtn.src = "./images/icons/icon-close.svg";
        mobileNav.classList.add("navbar__nav--active");
      } else {
        hamburgerBtn.src = "./images/icons/icon-hamburger.svg";
        mobileNav.classList.remove("navbar__nav--active");
      }
})
