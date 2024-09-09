const Producto = require('../models/productos.models');


const mostrarPaginaPrincipal = async (req, res) => {
    try {
      const productos = await Producto.find(); // Suponiendo que tienes un modelo Producto
      res.render('pages/index', { title: 'Inicio - MongoDB', productos });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al cargar los productos');
    }
  };

module.exports = {
    mostrarPaginaPrincipal
  };