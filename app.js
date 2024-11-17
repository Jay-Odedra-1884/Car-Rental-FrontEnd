let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let navBar = document.querySelector(".nav-bar");
let navLinks = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
});


