// Mobile Nav

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');


hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');

    mobile_menu.classList.toggle('is-open');
});


// Hide Nav

const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
    } else {
        nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
});


// Smooth Anchor

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})
    



