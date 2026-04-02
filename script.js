// smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
link.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
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
