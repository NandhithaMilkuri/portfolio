


/* =========================
   SMOOTH SCROLL NAVIGATION
========================= */
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function(e) {

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
window.addEventListener("scroll", function() {

    let current = "";

    const sections = document.querySelectorAll("section");

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
