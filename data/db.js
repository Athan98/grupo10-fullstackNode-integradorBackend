//Traemos Sequelize

const { Sequelize } = require('sequelize');

//documentación para ingresar a la base de datos

const db = new Sequelize("peliculas24127", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306
})

module.exports = db

