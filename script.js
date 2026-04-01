/* ======================
   TYPING ANIMATION
====================== */
const text = "Hello, I'm Nandhitha 👋";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing, 50);
}
}

typing();


/* ======================
   SCROLL FADE
====================== */
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", function(){
faders.forEach(function(el){
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("show");
}
});
});


/* ======================
   SMOOTH SCROLL
====================== */
const links = document.querySelectorAll("nav a");

links.forEach(function(link){
link.addEventListener("click", function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});
