const express = require('express');
const router = express.Router();
const controladorUsuarios  = require('../controllers/usuarios.controller');

router.get('/', controladorUsuarios.mostrarPaginaPrincipal);
router.get('/consultar', controladorUsuarios.consultarUsuarios);
router.get('/insertar', controladorUsuarios.mostrarFormularioInsercion);
router.post('/insertar', controladorUsuarios.insertarUsuario);
router.get('/usuarios/:email', controladorUsuarios.consultarUsuarios);

module.exports = router;