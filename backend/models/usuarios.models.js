const conexion = require('../config/connection')

const userSchema = new conexion.Schema({
    correo: {
        type: String,
        unique: [true, 'El correo ya está registrado'],
        required: [true, 'El correo es obligatorio']
    },
    pass: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minLength: [5, 'La contraseña debe tener al menos 5 caracteres'],
        maxLength: [20, 'La contraseña debe tener como máximo 20 caracteres']
    },
    fechaRegistro: {
        type: Date,
        default: Date.now,
    },
    rol: {
        type: String,
        enum: ['Cliente', 'Administrador'],
        default: 'Cliente',
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