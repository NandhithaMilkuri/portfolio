
/* =========================
   TYPING EFFECT
========================= */
const text = "Nandhitha";
let index = 0;

function typingEffect(){
    if(index < text.length){
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 100);
    }
}
typingEffect();


/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const elements = document.querySelectorAll(
".section, .project-card, .skill-box, .edu-card, .experience-card, .contact-btn"
);

elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });

});


/* =========================
   ACTIVE NAV HIGHLIGHT
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 150){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });

});
