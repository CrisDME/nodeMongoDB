const express = require('express');
const router = express.Router();

const { mostrarPaginaPrincipal } = require('../controllers/usuarios.controller');

router.get('/', mostrarPaginaPrincipal);

module.exports = router;