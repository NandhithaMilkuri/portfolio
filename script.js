// smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
link.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});
});

// typing
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

// reveal animation (SAFE)
const reveals=document.querySelectorAll('.reveal');
function reveal(){
reveals.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add('active');
}
});
}
window.addEventListener('scroll',reveal);
reveal();
