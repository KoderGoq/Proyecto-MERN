import mongoose from 'mongoose'; // Importamos el moongose para hacer el Scheema de BD
import bcrypt from 'bcrypt'; // para Hashear los passwords
import generarId from '../helpers/generarId.js'; // importamos para generar tokens unicos


const veterinarioSchema = mongoose.Schema({ // Configuramos el Schema con los datos
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requied: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type: String,
        default: generarId()
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

// Hasheando password
veterinarioSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Comprobar password
veterinarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
}
const Veterinario = mongoose.model('Veterinario', veterinarioSchema); // Configuramos el modelo junto con el Schema
export default Veterinario;