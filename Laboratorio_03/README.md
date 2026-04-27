## Despliegue contenedor Docker
docker build . -t i_daw_8080
docker run -d --name c_daw_8080 -p 8080:80 i_daw_8080
## cceso al índice del laboratorio
http://127.0.0.1:8080/lab03

### Detener contenedor en ejecucion
docker stop c_daw_8080
### Eliminar el contenedor
docker rm c_daw_8080
### Eliminar la imagen Docker
docker rmi i_daw_8080
