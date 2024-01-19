# API usando express

## HTTP Status Code:

- 100-199: Respuestas informativas
- 200-299: Respuestas satisfactorias
- 300-399: Re-direcciones
- 400-499: Errores del cliente
- 500-599: Errores del servidor

### Most Famous Status code:

* 200 OK
* 301 Moved Permanently -> Cuando un recurso se movió de lugar
* 400 Bad Request
* 404 Not Found
* 500 Internal Server Error

## Buffer

 Es una clase global que se utiliza para trabajar con datos binarios (imágenes, archivos, criptografía, etc), todo lo diferente de cadenas de texto.
 Lee el archivo, guarda el binario en memoria y luego lo utiliza con ayuda de los headers


## GET & POST request

Instala la extension `REST Client` en VSCode para probar las peticiones a la API desde el archivo: 

`./api.http`

## Middleware

Es una función que se ejecuta entre la petición y la respuesta

La request pasan primero por el middleware y procesar (extraer cookies, validar login, extraer info de json) algo previo al tratar el request y luego si procesa la request