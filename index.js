//Requerimos express
const express = require("express");

//Guardar metodos de express
const app = express();

//Crear puerto
const port = 3030;

//Requerimos y usamos CORS para habilitar ida y vuelta de informacion
const cors = require("cors");
app.use(cors());

//Agarra la informacion recibida del cliente, separa el JSON y lo manda al request
app.use(express.json());

//Requerir el router.js de peliculas
const peliculasRouter = require("./routes/peliculasRouter.js");

//Configuraciones del index.js para mandar al usuario a peliculasRouter
app.use("/peliculas", peliculasRouter);

//Levantamos el servidor
app.listen(port, () => {
    console.log(`Server OK en el puerto ${port}`);
});