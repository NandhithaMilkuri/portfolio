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
