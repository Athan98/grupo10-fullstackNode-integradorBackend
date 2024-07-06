const db = require ("../data/db")

const {DataTypes} = require ("sequelize")

const peliculasModel = db.define("peliculas", {
    titulo:{type:DataTypes.STRING},
    descripcion:{type:DataTypes.STRING},
    genero:{type:DataTypes.STRING},
    duracion:{type:DataTypes.INTEGER},
    director:{type:DataTypes.STRING},
    fecha_estreno:{type:DataTypes.DATE},
})

module.exports = peliculasModel