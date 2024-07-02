

//Funcion para listar peliculas
const listarPeliculas = (req, res) => {
    //Logica que trae todas las peliculas de la BD en JSON
    res.send("Traer todas las peliculas");
};

//Funcion para traer una pelicula por ID
const traerPelicula = (req, res) => {
    //Logica para traer una pelicula por ID de la BD en JSON
    res.send("Traigo una pelicula por ID");
}

//Dejamos listo para exportar las funciones cuando se pida en peliculasRouter.js
module.exports = { listarPeliculas, traerPelicula };