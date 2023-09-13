const mongoose = require('../config/config');
const SchemaUsuarios = new mongoose.Schema({

  email: {
    type: String,
    require: [true, 'Se requiere un correo'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Se requiere una contraseña'],
  },
  rol: {
    type: String,
    require: [true, 'Se requiere un rol'],
  },

});
const nuevoUsuario= mongoose.model('usuarios', SchemaUsuarios);
module.exports = nuevoUsuario;
