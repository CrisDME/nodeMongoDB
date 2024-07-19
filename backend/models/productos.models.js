const conexion = require('../config/connection')

const productSchema = new conexion.Schema({
    referencia: {
        type: String,
        required: [true, 'La referencia es obligatoria']
    },
    nombre: {
        type: String,
        required: [true, 'Asignar un nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    precio: {
        type: String,
        default: [0, 'El precio por defecto es 0'],
        min: [0, 'El precio por defecto es 0']
    },
    stock: {
        type: Number,
        default: [0, 'El stock por defecto es 0'],
        min: [0, 'El stock por defecto es 0']
    },
    imagen: {
        type: String,
        required: [true, 'No existe la imagen o ruta a la imagen por defecto']
    },
    habilitado: {
        type: Boolean,
        default: true
    }
}, { versionKey: false });

const productModel = conexion.model('productos', productSchema);

module.exports = productModel;