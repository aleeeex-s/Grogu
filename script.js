const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

let s=document.createElement("div");

s.className="star";

let size=Math.random()*3;

s.style.width=size+"px";
s.style.height=size+"px";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDuration=(Math.random()*2+1)+"s";

stars.appendChild(s);

}

const frases=[

"✨ Grogu levantó una roca.",
"✨ Sentiste una gran perturbación en la Fuerza.",
"✨ Din Djarin está orgulloso.",
"✨ La galaxia está en equilibrio.",
"✨ Tu nivel Jedi aumentó.",
"✨ Grogu comió otra rana.",
"✨ Los midiclorianos sonríen.",
"✨ Baby Yoda salvó el día."

];

const btn=document.getElementById("forceBtn");

const texto=document.getElementById("forceText");

const grogu=document.querySelector(".grogu");

btn.onclick=function(){

let r=Math.floor(Math.random()*frases.length);

texto.innerHTML=frases[r];

grogu.classList.add("force");

setTimeout(()=>{

grogu.classList.remove("force");

},3000);

};

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.clientX)/40;

let y=(window.innerHeight/2-e.clientY)/40;

document.querySelectorAll(".eye").forEach(el=>{

el.style.transform=`translate(${x}px,${y}px)`;

});

});
