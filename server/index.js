const express = require("express");
const connectDB = require('./config/db');

//Crear el servidor
const app = express();

//Conectar a la base de datos
connectDB();

//Creamos un puerto para la app
const PORT = process.env.PORT || 4000;

//Definir la página principal
app.get('/', (req, res)=> {
    res.send('Hola mundo');
});

//Arrancar la app o el servidor
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
