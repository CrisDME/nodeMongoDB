const express = require('express');
const router = express.Router();
const controladorProductos  = require('../controllers/productos.controller');

router.get('/', controladorProductos.mostrarPaginaPrincipal);
router.get('/consultar', controladorProductos.consultarUsuarios);
router.get('/insertar', controladorProductos.mostrarFormularioInsercion);
router.post('/insertar', controladorProductos.insertarUsuario);
router.get('/usuarios/:email', controladorProductos.consultarUsuarios);

module.exports = router;