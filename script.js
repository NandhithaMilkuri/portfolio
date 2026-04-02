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

// reveal animation FIXED
const reveals=document.querySelectorAll('.reveal');

function reveal(){
reveals.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-80){
el.classList.add('active');
}
});
}

window.addEventListener('scroll',reveal);
window.addEventListener('load',reveal);
