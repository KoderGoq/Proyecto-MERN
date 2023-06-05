import express from 'express'; // Importamos Express para cofigurar el router
import { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword, actualizarPerfil, actualizarPassword } from '../controllers/veterinarioController.js'; // Controlador del router
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router(); // Llamamos el Router

// Area publica
router.post('/', registrar); // Asignamos una url
router.get('/confirmar/:token', confirmar); // confirmacion del token
router.post('/login', autenticar); // Autenticar Usuario
router.post('/olvide-password', olvidePassword); // Resetear contraseña
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

// Area privada
router.get('/perfil', authMiddleware, perfil); // Otra para los perfiles del veterinario
router.put('/perfil/:id', authMiddleware, actualizarPerfil);
router.put('/actualizar-password', authMiddleware, actualizarPassword);

export default router;