const mongoose = require('../config/config');
const SchemaUsuarios = new mongoose.Schema({

  email: {
    type: String,
    require: [true, 'Se requiere un correo'],
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

module.exports = mongoose.model('Factura', SchemaUsuarios);
