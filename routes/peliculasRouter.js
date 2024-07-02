//Requerir express
const express = require("express");

//Utilizar Router de express. Router tiene todos los metodos de HTTP
const router = express.Router();

//Desestructuramos para traer las funciones del controlador de peliculas
const { listarPeliculas, traerPelicula } = require("../controllers/peliculasController.js")

//Traer todas las peliculas
router.get("/", listarPeliculas);

//Traer pelicula por ID
router.get("/:id", traerPelicula);

//Crear nueva pelicula
router.post("/", (req, res) => {

});

//Actualizar pelicula por ID
router.put("/:id", (req, res) => {

});

//Eliminar pelicula por ID
router.delete("/:id", (req, res) => {

});

//Exportamos router para utilizarlo en donde necesitemos
module.exports = router;