# Laboratorio 03: JavaScript Backend con Node.js y Express

Este proyecto consiste en una **Agenda Personal** desarrollada como parte del curso de Desarrollo de Aplicaciones Web. La aplicación permite la gestión integral de eventos (CRUD) utilizando Node.js en el servidor y el sistema de archivos (File System) para la persistencia de datos en formato Markdown.

## 🚀 Características
*   **Backend**: Implementado con Express.js.
*   **Persistencia**: Almacenamiento jerárquico en carpetas por fecha dentro de `/priv`.
*   **Frontend Dinámico**: Interfaz única que utiliza `fetch` para operaciones sin recargar la página.
*   **Markdown**: Visualización de descripciones con formato enriquecido mediante la librería `Marked`.
*   **Estadísticas**: Conteo en tiempo real de eventos totales y fechas únicas registradas.
*   **Limpieza Automática**: Eliminación de directorios vacíos al borrar el último evento de una fecha.

## 🛠️ Tecnologías Utilizadas
*   **Node.js** (v18+)
*   **Express.js**
*   **Docker**
*   **Librerías**: `marked` (Markdown parsing)

## 📦 Protocolo de Despliegue (Docker)

Para ejecutar esta aplicación en cualquier entorno con Docker (como Ubuntu MATE), siga estos pasos:

1.  **Despliegue contenedor Docker**
```docker build . -t i_daw_8080`
```docker run -d --name c_daw_8080 -p 8080:80 i_daw_8080`
2.  **Acceso la pagina del laboratorio**
http://127.0.0.1:8080/lab03

3.  **Detener contenedor en ejecucion**
```docker stop c_daw_8080`
4.  **Eliminar el contenedor**
```docker rm c_daw_8080`
5.  **Eliminar la imagen Docker**
    ```docker rmi i_daw_8080`

6.  **Acceso a la aplicación:**
    Abra su navegador e ingrese a la siguiente dirección:
    [http://localhost:8080/lab03](http://localhost:8080/lab03)

## 📂 Estructura de Archivos
La organización de los archivos sigue la estructura requerida para el despliegue y la persistencia de datos:
```text
Laboratorio_03/
├── index.js            # Servidor principal y rutas de la API
├── index.html          # Interfaz de usuario principal
├── Dockerfile          # Configuración de la imagen Docker
├── package.json        # Dependencias y scripts del proyecto
├── priv/               # Almacenamiento persistente de eventos (.md)
│   └── [YYYY.MM.DD]/   # Carpetas organizadas por fecha
│       └── [HH.MM].md  # Archivos de eventos en Markdown
└── pub/                # Archivos estáticos accesibles al cliente
    ├── css/
    │   └── style.css   # Estilos visuales de la aplicación
    └── js/
        └── agenda.js   # Lógica del frontend y Fetch API
```
---
## 👥 Integrantes - Grupo 7
*   Silva Pino Jesus Francisco
*   Pacheco Medina Geisel Reymar
*   Linares Aquino Gustavo

## 📺 Video de Demostración
[Ver video de prueba - Laboratorio 03](https://youtu.be/6Ydu2bIzOag)

---
© 2026 - Escuela Profesional de Ingeniería de Sistemas - UNSA