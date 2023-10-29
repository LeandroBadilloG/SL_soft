const mongoose = require('../config/config.bd');
const SchemaClientes = new mongoose.Schema({

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usurios.model',
    // required: [true, 'Se requiere un usuario'],
  },


}, {timestamps: true});

const Cliente =mongoose.model('Cliente', SchemaClientes);
module.exports =Cliente;
