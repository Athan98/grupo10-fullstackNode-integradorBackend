const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const dbConfig = {
  host: 'localhost', 
  user: 'tu_usuario', 
  password: 'tu_contraseña', 
  database: 'nombre_de_tu_base_de_datos', 
};

// Crear una conexión
const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

// Exportar la conexión para usarla en otros módulos
module.exports = connection;