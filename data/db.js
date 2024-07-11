//Traemos Sequelize

const { Sequelize } = require('sequelize');

//documentación para ingresar a la base de datos

const db = new Sequelize("dev-user_peliculas24127", "dev-user", "Elementor73764", {
  host: "mysql-dev-user.alwaysdata.net",
  dialect: "mysql",
  port: 3306
})

module.exports = db

