const express = require('express');
const router = express.Router();

const { mostrarPaginaPrincipal } = require('../controllers/index.controller');

router.get('/', mostrarPaginaPrincipal);

module.exports = router;