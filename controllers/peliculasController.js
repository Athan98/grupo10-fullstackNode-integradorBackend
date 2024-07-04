//Requerimos peliculasModel.js
const { where } = require("sequelize");
const peliculasModel = require("../models/peliculasModel.js")

//  C.R.U.D.

//Funcion para listar peliculas. Metodo GET
const listarPeliculas = async (req, res) => {
    //Logica que trae todas las peliculas de la BD en JSON
    try {
        const peliculas = await peliculasModel.findAll();
        //Devolvemos el JSON con todas las peliculas
        res.json(peliculas);
    } catch (error) {
        //Devolvemos JSON con error
        res.json({ message: error.message });
    }
};

//Funcion para traer una pelicula por ID. Metodo GET
const traerPelicula = async (req, res) => {
    //Logica para traer una pelicula por ID de la BD en JSON
    try {
        // Buscamos la Primary Key a traves de los parametros de la URL. En este caso traemos la ultima parte de
        // la URL: "/:id"
        const pelicula = await peliculasModel.findByPk(req.params.id);
        //Devolvemos el JSON con la pelicula
        res.json(pelicula);
    } catch (error) {
        //Devolvemos JSON con error
        res.json({ message: error.message });
    }
}

//Funcion para crear pelicula. Metodo POST
const crearPelicula = async (req, res) => {
    try {
        await peliculasModel.create(req.body);
        res.json({ "message": "- Registro creado correctamente -" });
    } catch (error) {
        //Devolvemos JSON con error
        res.json({ message: error.message });
    }
};

//Funcion para actualizar un registro existente en la BD
const actualizarPelicula = async (req, res) => {
    try {
        // Le pasamos al metodo el body del request donde estarán los datos. Tambien le pasamos el id por el parametro
        // de la URL de la pelicula que queremos actualizar
        await peliculasModel.update(req.body, { where: { id: req.params.id } });
        res.json({ "message": "- Registro actualizado correctamente -" });
    } catch (error) {
        //Devolvemos JSON con error
        res.json({ message: error.message });
    }
};

//Funcion para borrar un registro existente de la BD
const eliminarPelicula = async (req, res) => {
    try {
        // Le pasamos al metodo el ID del registro que queremos eliminar. Este ID viaja en los parametros de la URL
        await peliculasModel.destroy({ where: { id: req.params.id } });
        res.json({ "message": "- Registro borrado correctamente -" });
    } catch (error) {
        //Devolvemos JSON con error
        res.json({ message: error.message });
    }
};

//Dejamos listo para exportar las funciones cuando se pida en peliculasRouter.js
module.exports = { listarPeliculas, traerPelicula, crearPelicula, actualizarPelicula, eliminarPelicula };