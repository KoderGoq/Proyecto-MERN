/******************** Configurando servidor *********************/

import express from "express"; // Importamos express
import dotenv from "dotenv"; // Para las variables de entorno que tengamos
import cors from 'cors';
import conectarDB from "./config/db.js"; // Importamos la base de datos ya configurada
import veterinarioRoutes from "./routes/veterinarioRoutes.js"; // Importamos el router
import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express(); // Asignamos esa funcion a una variable
app.use(express.json()) // Enviar datos a la API
dotenv.config(); // Configuramos las variables de entorno para la base de datos
conectarDB(); // Llamamos la funcion de la base de datos

const dominiosPermitidos = ["http://localhost:5173"];

const corsOptions = {
    origin: function (origin, callback) {
        if (dominiosPermitidos.indexOf(origin) !== -1) {
            // El origen del request esta permitido
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
}

app.use(cors(corsOptions));
app.use('/api/veterinarios', veterinarioRoutes) // nuestro url de acceso
app.use('/api/pacientes', pacienteRoutes)

const PORT = process.env.PORT || 4000 // Asignamos el puerto en una variable de entorno

app.listen(PORT, () => { // Colocamos el puerto al que va estar alojado nuestro servidor
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});