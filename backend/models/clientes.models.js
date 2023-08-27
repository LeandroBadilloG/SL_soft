const mongoose = require('../config/config');
const shemnaClientes = new mongoose.Schema({

  nombre: {
    type: String,
    require: [true, 'Se requiere un nombre de usuario'],
  },
  apellido: {
    type: String,
    require: [true, 'Se requiere un apellido del cliente'],
  },
  documento: {
    type: String,
    require: [true, 'Se requiere un documento del cliente'],
  },
  celular: {
    type: String,
    default: 'Sin registrar numero celular',
  },
  email: {
    type: String,
    require: [true, 'Se requiere un correo'],
  },
  direccion: {
    type: String,
    default: 'Sin registrar direccion',
  },
  usuario: {
    type: Object(),
    required: [true, 'Se requiere un id de usuario'],
  },

  timestamps: true,

});

module.exports = mongoose.model('Factura', shemnaClientes);
