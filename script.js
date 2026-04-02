// typing name
const text="Hello, I'm Milkuri Nandhitha";
let i=0;

function type(){
if(i<text.length){
document.getElementById("name").innerHTML+=text.charAt(i);
i++;
setTimeout(type,80);
}
}
type();

// scroll animation
const reveals=document.querySelectorAll('.reveal');

function reveal(){
reveals.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100){
el.classList.add('active');
}
});
}

window.addEventListener('scroll',reveal);
