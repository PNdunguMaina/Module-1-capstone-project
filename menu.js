const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".bottom-nav");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelector(".nav-item");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
  hamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
  navItem.classList.toggle("open");
});

document.querySelectorAll(".nav-menu").forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
  });
});
