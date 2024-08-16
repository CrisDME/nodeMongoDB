const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentaSchema = new Schema({
  pedido: {
    type: Schema.Types.ObjectId,
    ref: 'Pedido',
    required: [true, 'El pedido es obligatorio'],
  },
  fechaVenta: {
    type: Date,
    default: Date.now,
  },
  montoTotal: {
    type: Number,
    required: [true, 'El monto total es obligatorio'],
    min: [0, 'El monto total no puede ser negativo'],
  },
  metodoPago: {
    type: String,
    required: [true, 'El método de pago es obligatorio'],
    enum: {
      values: ['Tarjeta de crédito', 'Paypal', 'Transferencia bancaria', 'Efectivo'],
      message: 'Método de pago inválido',
    },
  },
  estado: {
    type: String,
    required: [true, 'El estado es obligatorio'],
    enum: {
      values: ['Completada', 'Pendiente', 'Fallida'],
      message: 'Estado inválido',
    },
  },
}, {versionKey: false});

const Venta = mongoose.model('Venta', VentaSchema);
module.exports = Venta;
