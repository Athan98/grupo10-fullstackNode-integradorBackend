const db = require ("../data/db")

const {DataTypes} = require ("sequelize")

const peliculasModel = db.define("peliculas", {
    titulo:{
        type:DataTypes.STRING
        allowNull: false,     //no permite introducción de valores nulos
    },

    descripcion:{type:DataTypes.STRING},

    genero:{type:DataTypes.STRING},

    duracion:{
        type:DataTypes.INTEGER
        validate : {
            min: 0  //la duración debe ser un número positivo
        }
    },

    director:{type:DataTypes.STRING},

    fecha_estreno:{type:DataTypes.DATE},
})

module.exports = peliculasModel