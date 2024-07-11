//Requerimos express
const express = require("express");

//Guardar metodos de express
const app = express();

//Crear puerto
const port = process.env.PORT || 3030;

//Requerimos y usamos CORS para habilitar ida y vuelta de informacion
const cors = require("cors");
app.use(cors());

//Agarra la informacion recibida del cliente, separa el JSON y lo manda al request
app.use(express.json());

//Requerir el router.js de peliculas
const peliculasRouter = require("./routes/peliculasRouter.js");

//Llamado a db.js
const db = require ("./data/db.js")

//Conexión a la  base de datos

const conexiondb = async () => {
    try {
        await db.authenticate()
        console.log(`Conexión exitosa a la base de datos`);
    } catch (error) {
        console.log(` Error al conectar a la base de datos: ${error}`);
    }
}

//Configuraciones del index.js para mandar al usuario a peliculasRouter
app.use("/peliculas", peliculasRouter);

//Levanta el servidor y muestra mensaje si está OK
app.listen(port, () => {
    conexiondb()
    console.log(`Server OK en el puerto ${port}`);
});