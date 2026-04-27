// evento submit del formulario
document.getElementById("formEvento").addEventListener("submit", function(e) {
    e.preventDefault();

    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const descripcion = document.getElementById("descripcion").value;

    fetch("/crear", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ fecha, hora, descripcion })
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        cargarEventos(); // recargar lista despues de crear
    });
});

// funcion para mostrar eventos
function cargarEventos() {
    fetch("/eventos")
        .then(res => res.json())
        .then(data => {

            const contenedor = document.getElementById("listaEventos");
            contenedor.innerHTML = "";

            data.forEach(ev => {
                const div = document.createElement("div");
                div.innerText = ev.fecha + " - " + ev.hora + " -> " + ev.contenido;
                contenedor.appendChild(div);
            });
        });
}

// cargar eventos al iniciar
window.onload = cargarEventos;