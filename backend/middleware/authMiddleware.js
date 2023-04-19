import jwt from "jsonwebtoken";
import Veterinario from '../models/Veterinario.js';

const authMiddleware = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.veterinario = await Veterinario.findById(decoded.id).select("-password -token -confirmado");
            return next();
        } catch (error) {
            const error2 = new Error('Token no valido');
            return res.status(403).json({ msg: error2.message });
        }
    }

    if (!token) {
        const error = new Error('Token no valido o no existe');
        return res.status(403).json({ msg: error.message });
    }

    next();
};

export default authMiddleware;
