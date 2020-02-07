# Tópicos especiales en Telemática
> **Proyecto 1: GPS-App**
> Primer proyecto de la materia Tópicos Especiales en Telemática 2020-1

### Problemática
Un usuario necesita registrar su ubicación en tiempo real, guardando su ubicación actual en lapsos de cada segundo. Desea que la ubicación sea registrada a través de la información que provee su dispositivo móvil y así mismo en cualquier momento poder visualizar los lugares en los que estuvo y las rutas que recorrió por día.

### Requisitos funcionales
- Autenticación
- Registro de ubicación(latitud, longitud) en tiempo real
- Visualización de ubicaciones recorridas

### Requisitos no funcionales
- Seguridad

### Tecnologías de desarrollo
- **Back-end:** .NET Core 3.1.101
- **Front-end:** Angular 8.2.14
- **Base de datos:** MongoDB

### Autenticación de Servicios
- JSON Web Tokens
- IdentityServer

### Dificultades durante el desarrollo
La principal dificultad fue la implementación de *JWT* en el back-end puesto que nunca lo había hecho y no conocía bien el funcionamiento de esta API.
Otra cosa que me dio dificultad fueron las pruebas de estrés con *Postman* por el mismo motivo de no conocer bien su funcionamiento.
Para finalizar el desarrollo del proyecto, siento que me falta más conocimiento sobre implementación de requisitos no funcionales.

### Aprendizaje
Una de las cosas que aprendí es la diferencia entre *Autorización* y *Autentificación*, la implementación de seguridad en servicios REST y la fácil integración entre *.NET Core* y *MongoDB*.