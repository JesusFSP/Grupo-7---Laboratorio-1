// Importamos la libreria express para crear el servidor
const express = require("express");

// Importamos modulos para manejo de archivos y rutas
const fs = require("fs");
const path = require("path");

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

// ----MANEJO DE EVENTOS DE LA AGENDA----

// ruta para crear evento
app.post("/crear", (req, res) => {

    const { fecha, hora, descripcion } = req.body;

    // ruta de carpeta (priv/fecha) segun estructura del laboratorio
    const carpeta = path.join(__dirname, "priv", fecha);

    // crear carpeta si no existe
    if (!fs.existsSync(carpeta)) {
        fs.mkdirSync(carpeta, { recursive: true });
    }

    // nombre del archivo
    const archivo = path.join(carpeta, hora + ".md");

    // contenido en markdown
    const contenido = "# Evento\n\n" + descripcion;

    // guardar archivo
    fs.writeFileSync(archivo, contenido);

    res.send("Evento creado correctamente");
});

// Iniciamos el servidor en el puerto definido
app.listen(PORT, () => {
    // Mostramos mensaje en consola cuando el servidor esta activo
    console.log("Servidor corriendo en http://localhost:" + PORT);
    console.log("Ingreso a index.html por http://localhost/lab03");
    console.log("Ingreso a index.html por http://127.0.0.1/lab03");
});