// ===========================
// ELEMENTOS
// ===========================

const forceButton = document.querySelector(".force-button");
const mainImage = document.querySelector(".main-image");
const message = document.querySelector(".message");


// Guardamos la imagen original
const originalImage = mainImage.src;


// ===========================
// BOTÓN USE THE FORCE
// ===========================


forceButton.addEventListener("click", () => {


    // Efecto de desaparición rápida

    mainImage.style.opacity = "0";

    mainImage.style.transform = "scale(0.5)";


    setTimeout(() => {


        // Restaurar la misma imagen principal

        mainImage.src = originalImage;


        mainImage.style.opacity = "1";

        mainImage.style.transform = "scale(1)";


        // Activar efecto Fuerza

        mainImage.classList.add("force-active");



        // Cambiar mensaje

        message.innerHTML =
        `
        💚 <br>
        "La Fuerza es fuerte contigo..."<br>
        Pero mi corazón también.<br>
        Siempre te elegiría a ti.
        `;



        // Quitar efecto después de unos segundos

        setTimeout(()=>{

            mainImage.classList.remove("force-active");

        },4000);



    },700);



});



// ===========================
// EFECTO INICIAL DE CARGA
// ===========================


window.addEventListener("load",()=>{


    mainImage.style.opacity="0";


    setTimeout(()=>{


        mainImage.style.transition="1s";

        mainImage.style.opacity="1";


    },500);



});



// ===========================
// EFECTO DE MOVIMIENTO SUAVE
// ===========================


document.addEventListener("mousemove",(e)=>{


    const x = (window.innerWidth / 2 - e.clientX) / 50;

    const y = (window.innerHeight / 2 - e.clientY) / 50;



    mainImage.style.transform = 
    `
    rotateY(${x}deg)
    rotateX(${y}deg)
    `;


});
