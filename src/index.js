import style from "./sass/index.scss";
import "bootstrap";
import "./js/modal";

// Hamburger Nav
const hamburger = document.querySelector(".hamburger-nav");
const navDom = document.querySelector(".nav-links-mb");
if (hamburger !== null) {
  hamburger.addEventListener("click", function () {
    toggleNav();
  });
}

function toggleNav() {
  hamburger.classList.toggle("active");
  navDom.classList.toggle("activeNavMb");
}
