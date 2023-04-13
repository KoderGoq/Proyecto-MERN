/******************** Configurando servidor *********************/

import express from "express"; // Importamos express
import dotenv from "dotenv"; // Para las variables de entorno que tengamos
import conectarDB from "./config/db.js"; // Importamos la base de datos ya configurada
import veterinarioRoutes from "./routes/veterinarioRoutes.js"; // Importamos el router

const app = express(); // Asignamos esa funcion a una variable
app.use(express.json()) // Enviar datos a la API
dotenv.config(); // Configuramos las variables de entorno para la base de datos
conectarDB(); // Llamamos la funcion de la base de datos


app.use('/api/veterinarios', veterinarioRoutes) // nuestro url de acceso

const PORT = process.env.PORT || 4000 // Asignamos el puerto en una variable de entorno

app.listen(PORT, () => { // Colocamos el puerto al que va estar alojado nuestro servidor
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});