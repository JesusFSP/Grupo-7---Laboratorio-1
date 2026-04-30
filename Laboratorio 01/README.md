# Desarrollo de Aplicaciones Web - Grupo 7 Laboratorio 1

## Descripcion

Este proyecto implementa un servidor web usando Docker con Apache y dos VirtualHosts llamados developers y webapp

El objetivo es automatizar el despliegue de sitios web utilizando Docker

---

## Trabajo en equipo

Integrante 1: Geisel Reymar Pacheco Medina -> Configuro Docker Apache y VirtualHosts 

Integrante 2: Jesus Francisco Silva Pino -> Desarrollo el sitio developers usando HTML CSS y JS

Integrante 3: Gustavo Linares Aquino -> Migro y valido el proyecto webapp

---

## Funcionalidad

El contenedor utiliza Ubuntu 24.04

Se instala Apache automaticamente

Se configuran dos VirtualHosts

developers apunta a /var/www/developers  
webapp apunta a /var/www/webapp  

Apache inicia automaticamente al ejecutar el contenedor

---

## Requisitos

Tener instalado en la computadora

- Docker Desktop
- Git

Opcional
- WSL en Windows

---

## Clonar repositorio

Abrir terminal y ejecutar

git clone https://github.com/JesusFSP/Grupo-7---Laboratorio-1.git

Entrar a la carpeta

cd Grupo-7---Laboratorio-1

---

## Construir imagen Docker

Ejecutar

docker build -t lab01 .

---

## Ejecutar contenedor

Ejecutar

docker run -d -p 8080:80 lab01

Verificar que esta corriendo

docker ps

---

## Acceso desde navegador

Abrir en el navegador

http://localhost:8080

---

## Configuracion de alias

Para acceder a los VirtualHosts se debe editar el archivo hosts

### En Windows

Abrir bloc de notas como administrador y abrir

C:\Windows\System32\drivers\etc\hosts

Agregar

127.0.0.1 developers.local  
127.0.0.1 webapp.local  

Guardar el archivo

---

## Acceso final

Abrir en el navegador

http://developers.local:8080  
http://webapp.local:8080  

---

## Estructura del proyecto

Dockerfile contiene la configuracion del contenedor

apache/sites contiene los VirtualHosts

developers contiene el sitio web del grupo

webapp contiene el proyecto anterior adaptado

---

## Notas

Si no se ven cambios despues de modificar archivos es necesario reconstruir el contenedor

docker build -t lab01 .  
docker run -d -p 8080:80 lab01  

---

## Validacion

Los sitios fueron validados usando herramientas de la W3C para HTML y CSS

---

## Resultado

Se logro desplegar dos sitios web usando Docker y Apache

El acceso se realiza mediante alias configurados en el sistema