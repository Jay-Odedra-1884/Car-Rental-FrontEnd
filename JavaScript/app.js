let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let navBar = document.querySelector(".nav-bar");
let navLinks = document.querySelector(".nav-link");
let signUpBtn = document.querySelector(".sign-up-btn ");
let signOverlay = document.querySelector(".sign-overlay");
let signOverlayForm = document.querySelector(".sign-overlay-form");
let signOverlayExitBtn = document.querySelector(".sign-overlay-exit-btn");
let viewAllCarsBtn = document.querySelector(".view-all-car-btn");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
});

signUpBtn.addEventListener("click", () => {
    signOverlay.classList.add("active");
    // signOverlay.classList.contains("active") ?  signUpBtn.innerHTML = "Close" :  signUpBtn.innerHTML = "Sign Up";
});

signOverlayExitBtn.addEventListener("click", () => {
    signOverlay.classList.remove("active");
})

signOverlayForm.addEventListener("submit", (event) => {
    event.preventDefault();
})

viewAllCarsBtn.addEventListener("click", (event) => {
    window.location.href = "./allcars.html";
})




