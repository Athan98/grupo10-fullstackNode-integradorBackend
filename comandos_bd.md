1) CREAR BD

CREATE DATABASE peliculas24127 CHARACTER SET utf8 COLLATE utf8_spanish_ci;

2) CREAR TABLA peliculas y agregar campos para comunicarnos con Sequelize

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