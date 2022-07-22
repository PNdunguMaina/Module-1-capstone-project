const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu-m");
const navItem = document.querySelector(".nav-item");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu-m").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
  });
});

const aboutLink = document.querySelector(".about-link");
const about = document.getElementById("about-page");

aboutLink.addEventListener("click", () => {
  about.classList.toggle("active");
});
