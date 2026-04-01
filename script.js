/* TYPING */
const text="Hello, I'm Nandhitha 👋";
let i=0;
function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,50);
}}
typing();

/* FADE */
const faders=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
faders.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("show");
}
});
});

/* SMOOTH SCROLL */
document.querySelectorAll("nav a").forEach(link=>{
link.onclick=(e)=>{
e.preventDefault();
document.querySelector(link.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
};
});

/* 🔥 GITHUB PROJECTS */
fetch("https://api.github.com/users/NandhithaMilkuri/repos")
.then(res=>res.json())
.then(data=>{
const container=document.getElementById("github-projects");

data.slice(0,6).forEach(repo=>{
const div=document.createElement("div");
div.className="card";

div.innerHTML=`
<h3>${repo.name}</h3>
<p>${repo.description||"No description"}</p>
<a href="${repo.html_url}" target="_blank">View Code</a>
`;

container.appendChild(div);
});
});
