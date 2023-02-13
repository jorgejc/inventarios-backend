const jwt = require('jsonwebtoken');

const generarJWT = (usuario) => {
    const payload = { _id: usuario._id, nombre: usuario.nombre, email: usuario.email, 
        contrasena: usuario.contrasena, rol: usuario.rol, estado: usuario.estado };
    const token = jwt.sign(payload, '123456', { expiresIn: '1h' }) //2022-11-25 21:00:00 // 2022-11-25 22:00:00
    return token;
}

module.exports = {
    generarJWT
}
