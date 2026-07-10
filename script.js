// ===========================
// ELEMENTOS
// ===========================

const forceButton = document.getElementById("forceButton");
const grogu = document.getElementById("grogu");
const quote = document.getElementById("quote");

const flash = document.getElementById("flash");
const wave = document.getElementById("wave");

const forceOverlay = document.getElementById("forceOverlay");
const forceGrogu = document.getElementById("forceGrogu");

const particles = document.getElementById("particles");


// ===========================
// BOTÓN USE THE FORCE
// ===========================

forceButton.addEventListener("click", () => {


    // Flash de energía

    flash.classList.add("active");


    // Onda de Fuerza

    wave.classList.add("active");


    // Animación sobre Grogu principal

    grogu.style.transform = "scale(1.08)";



    // Mostrar Grogu ampliado

    forceOverlay.classList.add("show");



    // Cambiar frase

    quote.innerHTML =
    `
    "The Force is strong with you..."
    <br><br>
    💚 Always.
    `;



    setTimeout(() => {

        flash.classList.remove("active");

        wave.classList.remove("active");


    }, 1500);



});



// ===========================
// CERRAR IMAGEN GRANDE
// ===========================

forceOverlay.addEventListener("click", () => {


    forceOverlay.classList.remove("show");


    grogu.style.transform = "scale(1)";


});




// ===========================
// ENTRADA INICIAL
// ===========================

window.addEventListener("load", () => {


    grogu.style.opacity = "0";


    setTimeout(() => {


        grogu.style.transition = "1.5s";

        grogu.style.opacity = "1";


    },500);


});




// ===========================
// MOVIMIENTO PARALLAX
// ===========================

document.addEventListener("mousemove", (e) => {


    const x =
    (window.innerWidth / 2 - e.clientX) / 80;


    const y =
    (window.innerHeight / 2 - e.clientY) / 80;



    grogu.style.transform =
    `
    translate(${x}px, ${y}px)
    `;


});




// ===========================
// CREAR PARTICULAS
// ===========================

if(particles){


    for(let i = 0; i < 70; i++){


        const particle = document.createElement("span");


        particle.className = "particle";


        particle.style.left =
        Math.random() * 100 + "%";


        particle.style.top =
        Math.random() * 100 + "%";


        particle.style.animationDelay =
        Math.random() * 8 + "s";


        particles.appendChild(particle);


    }

}
