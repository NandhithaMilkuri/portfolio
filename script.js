const text="Nandhitha";
let i=0;

function animate(){
if(i<text.length){
document.getElementById("name").innerHTML+=text.charAt(i);
i++;
setTimeout(animate,100);
}
}
animate();
