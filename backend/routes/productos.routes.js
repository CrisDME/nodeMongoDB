const express = require('express');
const router = express.Router();
const controladorProductos  = require('../controllers/productos.controller');

router.get('/mostrarProductos', controladorProductos.mostrarProductos);
router.post('/insertarProducto', controladorProductos.insertarProducto);
router.get('/mostrarProductoPorId/:id', controladorProductos.mostrarProductoPorId);
router.put('/actualizarProducto/:id', controladorProductos.actualizarProducto);
router.delete('/eliminarProducto/:id', controladorProductos.eliminarProducto);

module.exports = router;