// ======================================================
// IMÁGENES
// ======================================================

const images = [
    "img/grogu1.webp",
    "img/grogu2.webp",
    "img/grogu3.webp"
];

const grogu = document.getElementById("grogu");
const thumbs = document.querySelectorAll(".thumb");

let current = 0;

// ======================================================
// CAMBIO DE IMAGEN
// ======================================================

function changeImage(index){

    if(index===current) return;

    grogu.style.opacity=0;

    setTimeout(()=>{

        grogu.src=images[index];

        thumbs.forEach(t=>t.classList.remove("active"));

        thumbs[index].classList.add("active");

        grogu.style.opacity=1;

        current=index;

    },300);

}

thumbs.forEach((thumb,index)=>{

    thumb.onclick=()=>changeImage(index);

});

setInterval(()=>{

    let next=(current+1)%images.length;

    changeImage(next);

},7000);

// ======================================================
// CURSOR GLOW
// ======================================================

const glow=document.getElementById("cursorGlow");

window.addEventListener("mousemove",e=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

// ======================================================
// PARALLAX
// ======================================================

const light=document.querySelector(".light");
const hero=document.querySelector(".hero");

hero.addEventListener("mousemove",e=>{

    const x=(e.clientX/window.innerWidth-.5)*30;

    const y=(e.clientY/window.innerHeight-.5)*30;

    grogu.style.transform=
    `translate(${x}px,${y}px)`;

    light.style.transform=
    `translate(${x/2}px,${y/2}px)`;

});

hero.addEventListener("mouseleave",()=>{

    grogu.style.transform="translate(0,0)";

    light.style.transform="translate(0,0)";

});

// ======================================================
// PARTÍCULAS
// ======================================================

const particleLayer=document.getElementById("particles");

function particle(x,y){

    const p=document.createElement("div");

    p.className="particle";

    const size=Math.random()*8+4;

    p.style.width=size+"px";

    p.style.height=size+"px";

    p.style.left=x+"px";

    p.style.top=y+"px";

    const angle=Math.random()*Math.PI*2;

    const speed=Math.random()*140+80;

    p.dataset.vx=Math.cos(angle)*speed;

    p.dataset.vy=Math.sin(angle)*speed;

    particleLayer.appendChild(p);

    let life=0;

    function animate(){

        life++;

        let px=parseFloat(p.style.left);

        let py=parseFloat(p.style.top);

        px+=p.dataset.vx/60;

        py+=p.dataset.vy/60;

        p.style.left=px+"px";

        p.style.top=py+"px";

        p.style.opacity=1-life/80;

        p.style.transform=
        `scale(${1-life/80})`;

        if(life<80){

            requestAnimationFrame(animate);

        }else{

            p.remove();

        }

    }

    animate();

}

// ======================================================
// USE THE FORCE
// ======================================================

const forceButton=document.getElementById("forceButton");
const flash=document.getElementById("flash");
const wave=document.getElementById("wave");

forceButton.onclick=()=>{

    flash.animate([

        {opacity:0},

        {opacity:.6},

        {opacity:0}

    ],{

        duration:500

    });

    wave.animate([

        {

            opacity:1,

            width:"10px",

            height:"10px"

        },

        {

            opacity:0,

            width:"900px",

            height:"900px"

        }

    ],{

        duration:1200,

        easing:"ease-out"

    });

    const rect=grogu.getBoundingClientRect();

    const cx=rect.left+rect.width/2;

    const cy=rect.top+rect.height/2;

    for(let i=0;i<160;i++){

        particle(cx,cy);

    }

    grogu.animate([

        {

            transform:"scale(1)"

        },

        {

            transform:"scale(1.08)"

        },

        {

            transform:"scale(1)"

        }

    ],{

        duration:900

    });

};

// ======================================================
// ESTRELLAS FUGACES
// ======================================================

function shootingStar(){

    const star=document.createElement("div");

    star.className="shootingStar";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*200+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1200);

}

setInterval(()=>{

    if(Math.random()<0.6){

        shootingStar();

    }

},2500);

// ======================================================
// QUOTES
// ======================================================

const quotes=[

'"Size matters not."',

'"This is the Way."',

'"The Force will be with you."',

'"Do or do not. There is no try."',

'"Fear is the path to the dark side."'

];

const quote=document.getElementById("quote");

setInterval(()=>{

    quote.style.opacity=0;

    setTimeout(()=>{

        quote.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];

        quote.style.opacity=1;

    },400);

},6000);
