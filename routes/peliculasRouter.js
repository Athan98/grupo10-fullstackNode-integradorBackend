//Requerir express
const express = require("express");

//Utilizar Router de express. Router tiene todos los metodos de HTTP
const router = express.Router();

//Desestructuramos para traer las funciones del controlador de peliculas
const { listarPeliculas, traerPelicula, crearPelicula, actualizarPelicula, eliminarPelicula } = require("../controllers/peliculasController.js")

//Traer todas las peliculas
router.get("/", listarPeliculas);

//Traer pelicula por ID
router.get("/:id", traerPelicula);

//Crear nueva pelicula
router.post("/", crearPelicula);

//Actualizar pelicula por ID
router.put("/:id", actualizarPelicula);

//Eliminar pelicula por ID
router.delete("/:id", eliminarPelicula);

//Exportamos router para utilizarlo en donde necesitemos
module.exports = router;