const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios.controller');

router.get('/', usuariosController.mostrarFormularioInsercion);

router.post('/', usuariosController.insertarUsuario);

module.exports = router;
