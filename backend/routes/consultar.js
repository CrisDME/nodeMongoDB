const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

const { consultarUsuarios } = usuariosController;

router.get('/', consultarUsuarios);

module.exports = router;
