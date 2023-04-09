/******************** Configurando servidor *********************/

import Express from "express"; // Importamos Express
import dotenv from "dotenv"; // Para las variables de entorno que tengamos
import conectarDB from "./config/db.js"; // Importamos la base de datos ya configurada

const app = Express(); // Asignamos esa funcion a una variable
dotenv.config(); // Configuramos las variables de entorno para la base de datos
conectarDB(); // Llamamos la funcion de la base de datos


app.use('/', (req, res) => { // Lo mostramos en el localhost:4000
    res.send('Hola mundo desde NodeJS');
})

const PORT = process.env.PORT || 4000 // Asignamos el puerto en una variable de entorno

app.listen(PORT, () => { // Colocamos el puerto al que va estar alojado nuestro servidor
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});