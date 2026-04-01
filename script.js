/* Loader */
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

/* Mobile Menu */
const toggleMenu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggleMenu.onclick = function () {
    nav.classList.toggle("show");
};

/* Scroll */
function scrollToProjects() {
    document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
}

/* Typing */
const text = "Aspiring Software Developer";
let index = 0;

function typing() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 50);
    }
}

typing();

/* Fade */
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", function () {
    faders.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

/* Theme */
const themeToggle = document.getElementById("theme-toggle");

themeToggle.onclick = function () {
    document.body.classList.toggle("light");
};

/* Particles */
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { speed: 1 },
        line_linked: { enable: true }
    }
});

/* GitHub Projects */
fetch("https://api.github.com/users/NandhithaMilkuri/repos")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        const container = document.getElementById("github-projects");

        data.slice(0, 6).forEach(function (repo) {

            const div = document.createElement("div");
            div.className = "card";

            div.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available"}</p>
                <a href="${repo.html_url}" target="_blank">View Project</a>
            `;

            container.appendChild(div);
        });
    });
