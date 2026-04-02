/* TYPING */
const text="Nandhitha";
let i=0;
function type(){
if(i<text.length){
document.getElementById("typing-text").innerHTML+=text.charAt(i);
i++;
setTimeout(type,100);
}}
type();

/* SCROLL ANIMATION */
const elements=document.querySelectorAll(".hidden");
window.addEventListener("scroll",()=>{
elements.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("show");
}
});
});

/* SMOOTH SCROLL */
document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",e=>{
e.preventDefault();
document.querySelector(link.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});
