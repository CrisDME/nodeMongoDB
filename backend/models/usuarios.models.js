const conexion = require('../config/connection')

const userSchema = new conexion.Schema({
    correo: {
        type: String,
        unique: true,
        required: [true, 'El correo es obligatorio']
    },
    pass: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minLength: [5, 'La contraseña debe tener al menos 5 caracteres'],
        maxLength: [20, 'La contraseña debe tener como máximo 20 caracteres']
    },
    direccion: {
        type: String,
        required: [true, 'La dirección es obligatoria'],
        trim: true,
        maxLength: [20, 'La contraseña debe tener como máximo 20 caracteres']
    },
    rol: {
        type: String,
        default: 'guest'
    },
    cedula: {
        type: String,
        required: true
    },
    habilitado: {
        type: Boolean,
        default: true
    }
}, { versionKey: false });

const userModel = conexion.model('usuarios', userSchema);

module.exports = userModel;