const express = require('express');
const router = express.Router();
const controladorUsuarios  = require('../controllers/usuarios.controller');


router.get('/usuarios', controladorUsuarios.consultarUsuarios);
router.get('/usuarios/:email', controladorUsuarios.consultarUsuarios);

module.exports = router;
