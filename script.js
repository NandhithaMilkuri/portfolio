/* ================================
   SCROLL REVEAL ANIMATION
================================ */
const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }

    });

});


/* ================================
   SMOOTH SCROLL (NAV LINKS)
================================ */
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ================================
   ACTIVE NAV HIGHLIGHT
================================ */
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ================================
   TYPING ANIMATION (RESUME BASED)
================================ */
const text = "Aspiring Software Developer";
let index = 0;

function typingEffect() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 50);
    }

}

typingEffect();
