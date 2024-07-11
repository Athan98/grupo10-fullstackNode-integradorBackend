# Proyecto de Backend: Catálogo de Películas

Este proyecto es un backend diseñado para gestionar un catálogo de películas. 

Es un *CRUD* que permite realizar operaciones básicas como agregar, editar y eliminar de la base de datos, una película. 

### Cada película puede incluir los siguientes campos:


- Título: El título de la película.
- Fecha de estreno: La fecha en la que la película fue lanzada.
- Descripción: Una breve sinopsis o descripción de la trama.
- Género: El género al que pertenece la película (acción, comedia, drama, etc.).
- Duración en minutos: La duración total de la película en minutos.
- Director: El nombre del director de la película.
- Fecha de Estreno: La fecha de estreno de la película.


## Funcionalidades

- **Agregar película**: Permite añadir una nueva entrada al catálogo con todos los campos mencionados anteriormente.

- **Editar película**: Permite actualizar la información de una película existente, incluyendo cambiar el título, la fecha de estreno, la descripción, el género, el director o la duración en minutos.

- **Eliminar película**: Permite quitar una película específica según su identificador único.



## Tecnologías Utilizadas

- **Lenguaje de Programación**: 
    + Se utilizó para el desarrollo del Backend *Node.js* de *JavaScript*, con el framework *Express js*. 
    + Para el frontend, se utiliza *JavaScript* puro usando *Axios* para hacer los llamados a la API, acompañado de *HTML* para estructurar y *CSS* para darle los estilos básicos.

- **Base de Datos**: 
    + Se emplea una base de datos *SQL* para almacenar y gestionar la información de las películas. La conexión se genera desde el archivo db.js
    + Se genera una **BD** en alwaysdata para poder usarlo en línea.
    
    
    ##### CREAR BD

    ~~~
    CREATE DATABASE peliculas24127 CHARACTER SET utf8 COLLATE utf8_spanish_ci;
    ~~~

    ##### CREAR TABLA peliculas y agregar campos para comunicarnos con Sequelize

    ~~~
    USE peliculas24127;

    CREATE TABLE peliculas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        titulo VARCHAR(60) NOT NULL,
        descripcion VARCHAR(140),
        genero VARCHAR(60),
        duracion INT NOT NULL,
        director VARCHAR(60),
        fecha_estreno DATE,
        createdAt DATETIME,
        updatedAt DATETIME
    );
    ~~~



## IMPLEMENTACIÓN:

Al descargar el proyecto, correr ***npm install*** en la consola desde la carpeta raíz,para instalar los módulos de Node necesarios pre instalados en las dependecias del archivo *package.json*

~~~
"dependencies": {
    "axios": "^1.7.2",
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "mysql": "^2.18.1",
    "mysql2": "^3.10.1",
    "nodemon": "^3.1.4",
    "sequelize": "^6.37.3"
  }
~~~




#### Contribuyentes en el proyecto:

Giancarlo Yovera, Leo Zacca, Nicolás Roldán, Jorge Osses.

Integrantes del Grupo 10 - Comisión 24127 - Codo a Codo.

