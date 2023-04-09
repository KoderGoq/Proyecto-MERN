/******************** Configurando Base de datos con MondoDB *********************/

import mongoose from "mongoose"; // importamos mongoose

const conectarDB = async () => { // Asignamos la url en un try catch
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, { // Primero colocamos la url que nos MongoDB Atlas (Luego la puedes cambiar a una variable de entorno para que de mayor seguridad al publicar los arvhivos)y despues agregamos nosotros las optiones
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `${db.connection.host}: ${db.connection.port}`; // Generemos nuestro url de conexion
        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }
}

export default conectarDB;