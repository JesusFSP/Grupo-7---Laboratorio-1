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