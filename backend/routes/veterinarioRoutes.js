import express from 'express'; // Importamos Express para cofigurar el router
import { registrar, perfil, confirmar } from '../controllers/veterinarioController.js'; // Controlador del router

const router = express.Router(); // Llamamos el Router

router.post('/', registrar); // Asignamos una url
router.get('/perfil', perfil); // Otra para los perfiles del veterinario
router.get('/confirmar/:token', confirmar); // confirmacion del token

export default router;