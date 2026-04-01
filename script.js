
/* typing */
const text="Hello, I'm Nandhitha 👋";
let i=0;
function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,50);
}}
typing();

/* fade */
const faders=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
faders.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("show");
}
});
});

/* projects data */
const projects=[
{name:"Elevate Estates",type:"web"},
{name:"AgroConnect",type:"web"},
{name:"Fake News Detection ML",type:"ml"},
{name:"Expense Tracker",type:"ml"}
];

/* render projects */
function renderProjects(list){
const container=document.getElementById("project-container");
container.innerHTML="";
list.forEach(p=>{
const div=document.createElement("div");
div.className="card";
div.innerHTML=p.name;
container.appendChild(div);
});
}

/* filter */
function filterProjects(type){
if(type==="all"){
renderProjects(projects);
}else{
renderProjects(projects.filter(p=>p.type===type));
}
}

/* initial load */
renderProjects(projects);
