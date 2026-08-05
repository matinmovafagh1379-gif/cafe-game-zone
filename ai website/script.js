window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.6s";

    setTimeout(() => {

        loader.remove();

    },600);

});
document.querySelectorAll(".game-card").length
/*==============================
        LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

});


/*==============================
        MOBILE MENU
==============================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/*==============================
        STICKY HEADER
==============================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*==============================
        BACK TO TOP
==============================*/

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("active");

    } else {

        backToTop.classList.remove("active");

    }

});


backToTop.addEventListener("click", (e) => {

    e.preventDefault();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==============================
        SCROLL REVEAL
==============================*/

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


/*==============================
        SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*==============================
        ACTIVE NAV LINK
==============================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});