const express = require('express');
const router = express.Router();

const { consultarUsuarios } = require('../controllers/usuarios.controller');

router.get('/', consultarUsuarios);

module.exports = router;
