const conexion = require("../config/connection");

const clientSchema = new conexion.Schema({
  nombre: {
    type: String,
    required: [true, 'el nombre completo debe ser ingresado'],
    trim: true,
    maxLength: [150, 'el nombre ingresado es muy extenso'],
    minLength: [8, 'el nombre ingresado es muy corto']
  },
  telefono: {
    type: String,
    required: true,
    trim: true,
    minLength: [9, 'el teléfono ingresado es muy corto'],
    maxLength: [14, 'el teléfono ingresado es muy extenso']
  },
  direccion: {
    type: String,
    required: true,
    trim: true,
    minLength: [9, 'la dirección ingresada es muy corta']
  },
  habilitado: {
    type: Boolean,
    default: true
  },
  usuario: {
    type: mongoose.SchemaTypes.ObjectId
  }
},{versionKey: false});

const clientModel = conexion.model('clientes', clientSchema);

module.exports = clientModel;
