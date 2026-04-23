// CONTENEDOR PRINCIPAL 
const contenedorPrincipal = document.createElement("div");
document.body.appendChild(contenedorPrincipal);

// TITULO 
const titulo = document.createElement("h1");
titulo.innerText = "El Ahorcado - Arequipa";
titulo.style.textAlign = "center";
contenedorPrincipal.appendChild(titulo);

// CONTENEDOR SUPERIOR 
const contenedorSuperior = document.createElement("div");
contenedorSuperior.style.display = "flex";
contenedorSuperior.style.justifyContent = "center";
contenedorSuperior.style.gap = "50px";
contenedorSuperior.style.marginTop = "20px";

contenedorPrincipal.appendChild(contenedorSuperior);

// CONTENEDOR CANVAS 
const contenedorCanvas = document.createElement("div");
contenedorSuperior.appendChild(contenedorCanvas);

// CANVAS
const canvas = document.createElement("canvas");
canvas.width = 300;
canvas.height = 300;
canvas.style.border = "1px solid black";

contenedorCanvas.appendChild(canvas);

const ctx = canvas.getContext("2d"); // contexto del canvas

// CONTENEDOR INFORMACION
const contenedorInformacion = document.createElement("div");
contenedorSuperior.appendChild(contenedorInformacion);

// TEXTO PALABRA A ADIVINAR
const textoPalabra = document.createElement("p");
textoPalabra.innerText = "Palabra a adivinar:";
contenedorInformacion.appendChild(textoPalabra);

// CONTENEDOR DE LA PALABRA -> guiones
const contenedorPalabra = document.createElement("div");
contenedorPalabra.style.display = "flex";
contenedorPalabra.style.gap = "10px";
contenedorPalabra.style.marginTop = "10px";

contenedorInformacion.appendChild(contenedorPalabra);

// PALABRAS AREQUIPEÑAS
const palabras = ["PAMPACOLCA", "AREQUIPA", "MISTI", "CHACHANI"];

// palabra actual
let palabraSecreta = "";
let errores = 0;
let letrasIncorrectas = [];
let letrasCorrectas = [];

// funcion iniciar juego
function iniciarJuego() {
    contenedorPalabra.innerHTML = "";

    errores = 0;
    letrasIncorrectas = [];
    letrasCorrectas = [];

    textoErrores.innerText = "Errores: 0 / 10";
    textoLetrasIncorrectas.innerText = "Letras incorrectas: ";

    // mostrar errores
    contenedorErrores.style.display = "block";

    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

    crearBotones(); // añade los botones con letras A-Z

    for (let i = 0; i < palabraSecreta.length; i++) {
        const letra = document.createElement("span");
        letra.innerText = "_";
        letra.style.fontSize = "24px";
        letra.style.margin = "5px";
        contenedorPalabra.appendChild(letra);
    }
}

// CONTENEDOR INFERIOR
const contenedorInferior = document.createElement("div");
contenedorInferior.style.textAlign = "center";
contenedorInferior.style.marginTop = "30px";

contenedorPrincipal.appendChild(contenedorInferior);

// BOTON INICIAR JUEGO
const botonIniciar = document.createElement("button");
botonIniciar.innerText = "Iniciar Juego";
botonIniciar.style.padding = "10px 20px";
botonIniciar.style.fontSize = "16px";

botonIniciar.onclick = function () {
    iniciarJuego();
};

contenedorInferior.appendChild(botonIniciar);

// CONTENEDOR ERRORES
const contenedorErrores = document.createElement("div");
contenedorErrores.style.marginTop = "20px";
contenedorErrores.style.padding = "10px";
contenedorErrores.style.backgroundColor = "#f5b7bdee";
contenedorErrores.style.color = "#ac0011";
contenedorErrores.style.borderRadius = "5px";

// oculto al inicio
contenedorErrores.style.display = "none";
contenedorInformacion.appendChild(contenedorErrores);

// TEXTO ERRORES
const textoErrores = document.createElement("p");
textoErrores.innerText = "Errores: 0 / 10";
contenedorErrores.appendChild(textoErrores);

// TEXTO LETRAS INCORRECTAS
const textoLetrasIncorrectas = document.createElement("p");
textoLetrasIncorrectas.innerText = "Letras incorrectas: ";
contenedorErrores.appendChild(textoLetrasIncorrectas);

// CONTENEDOR LETRAS
const contenedorLetras = document.createElement("div");
contenedorLetras.style.display = "flex";
contenedorLetras.style.flexWrap = "wrap";
contenedorLetras.style.justifyContent = "center";
contenedorLetras.style.gap = "10px";
contenedorLetras.style.marginTop = "20px";

contenedorPrincipal.appendChild(contenedorLetras);

// FUNCION CREAR BOTONES
function crearBotones() {
    contenedorLetras.innerHTML = "";

    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let letra of abecedario) {
        const boton = document.createElement("button");
        boton.innerText = letra;

        boton.style.width = "40px";
        boton.style.height = "40px";
        boton.style.fontSize = "16px";

        contenedorLetras.appendChild(boton);
    }
}