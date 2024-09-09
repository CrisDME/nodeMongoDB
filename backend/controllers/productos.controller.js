const Producto = require('../models/productos.models');

// Mostrar todos los productos
const mostrarProductos = (req, res) => {
  Producto.find({})
      .then((productos) => {
          res.render('pages/products/consultarProductos', { productos, title: "Productos"});
      })
      .catch((err) => {
          console.error(err);
          res.status(500).send("Error al obtener productos");
      });
};

// Mostrar un producto por ID
const mostrarProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }
    res.json(producto);
  } catch (err) {
    console.error('Error al consultar producto:', err);
    res.status(500).send('Error al consultar producto');
  }
};

// Insertar un nuevo producto
const insertarProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).send('Producto creado correctamente');
  } catch (err) {
    console.error('Error al insertar producto:', err);
    res.status(500).send('Error al insertar producto');
  }
};

// Actualizar un producto existente
const actualizarProducto = async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!productoActualizado) {
      return res.status(404).send('Producto no encontrado');
    }
    res.send('Producto actualizado correctamente');
  } catch (err) {
    console.error('Error al actualizar producto:', err);
    res.status(500).send('Error al actualizar producto');
  }
};

// Eliminar un producto
const eliminarProducto = async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) {
      return res.status(404).send('Producto no encontrado');
    }
    res.send('Producto eliminado correctamente');
  } catch (err) {
    console.error('Error al eliminar producto:', err);
    res.status(500).send('Error al eliminar producto');
  }
};

module.exports = {
  mostrarProductos,
  mostrarProductoPorId,
  insertarProducto,
  actualizarProducto,
  eliminarProducto
};
