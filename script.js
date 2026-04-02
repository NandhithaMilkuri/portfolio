// smooth nav
document.querySelectorAll('nav a').forEach(link=>{
link.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});
});

// animation
const elements=document.querySelectorAll('.fade');
window.addEventListener('scroll',()=>{
elements.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add('show');
}
});
});

// typing effect
const text="Aspiring Software Developer & Data Analyst";
let i=0;
function type(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(type,40);
}
}
type();

// nav highlight
const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
let current="";
sections.forEach(sec=>{
if(scrollY>=sec.offsetTop-150){
current=sec.id;
}
});
document.querySelectorAll("nav a").forEach(a=>{
a.classList.remove("active");
if(a.getAttribute("href")==="#"+current){
a.classList.add("active");
}
});
});
