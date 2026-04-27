// Importamos la libreria express para crear el servidor
const express = require("express");

// Creamos la aplicacion de express
const app = express();

// Definimos el puerto 80 (usado por Docker)
const PORT = 80;

// Permitimos recibir datos en formato JSON
app.use(express.json());

// Permitimos recibir datos desde formularios HTML
app.use(express.urlencoded({ extended: true }));

// Hacemos publica la carpeta "pub" en la ruta /lab03
app.use("/lab03", express.static("pub"));

// Ruta principal al entrar a /lab03
app.get("/lab03", (req, res) => {
    // Enviamos el archivo index.html al navegador
    res.sendFile(__dirname + "/index.html");
});

// Iniciamos el servidor en el puerto definido
app.listen(PORT, () => {
    // Mostramos mensaje en consola cuando el servidor esta activo
    console.log("Servidor corriendo en http://localhost:" + PORT);
    console.log("Ingreso a index.html por http://localhost/lab03");
    console.log("Ingreso a index.html por http://127.0.0.1/lab03");
});
