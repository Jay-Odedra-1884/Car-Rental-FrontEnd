let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let navBar = document.querySelector(".nav-bar");
let navLinks = document.querySelector(".nav-link");
let signUpBtn = document.querySelector(".sign-up-btn ");
let signOverlay = document.querySelector(".sign-overlay");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
});

signUpBtn.addEventListener("click", () => {
    signOverlay.classList.toggle("active");
    signOverlay.classList.contains("active") ?  signUpBtn.innerHTML = "Close" :  signUpBtn.innerHTML = "Sign Up";
})


