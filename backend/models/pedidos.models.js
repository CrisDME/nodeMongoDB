const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PedidoSchema = new Schema({
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 'Cliente',
    required: [true, 'El cliente es obligatorio'],
  },
  carrito: [{
    producto: {
      type: Schema.Types.ObjectId,
      ref: 'Producto',
      required: [true, 'El producto es obligatorio'],
    },
    cantidad: {
      type: Number,
      required: [true, 'La cantidad es obligatoria'],
      min: [1, 'La cantidad debe ser al menos 1'],
    },
  }],
  subtotal: {
    type: Number,
    required: [true, 'El subtotal es obligatorio'],
    min: [0, 'El subtotal no puede ser negativo'],
  },
  impuesto: {
    type: Number,
    required: [true, 'El impuesto es obligatorio'],
    min: [0, 'El impuesto no puede ser negativo'],
  },
  total: {
    type: Number,
    required: [true, 'El total es obligatorio'],
    min: [0, 'El total no puede ser negativo'],
  },
  estado: {
    type: [String],
    enum: {
      values: ['Pendiente', 'En proceso', 'Enviado', 'Entregado', 'Cancelado'],
      message: 'Estado inválido',
    },
    required: [true, 'El estado es obligatorio'],
  },
  fechaPedido: {
    type: Date,
    default: Date.now,
  },
}, {versionKey: false});

const Pedido = mongoose.model('Pedido', PedidoSchema);
module.exports = Pedido;
