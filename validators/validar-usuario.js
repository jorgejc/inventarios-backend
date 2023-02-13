const { check } = require('express-validator');

const validarUsuario = (req, res) => {

const validaciones = []
    check('nombre') // verificar nombre
        .exists() //verificar que existe
        .not()
        .isEmpty(), //no  sea vacio
    check('email')
        .exists()
        .not()
        .isEmpty(),
    check('email')
        .exists()
        .isEmail()
        .not()
        .isEmpty()

    return validaciones;
}


module.exports = { validarUsuario }