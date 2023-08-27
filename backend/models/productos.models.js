const mongoose = require('../config/config');
const shemnaProductos = new mongoose.Schema({

  nombre: {
    type: String,
    require: true,
  },
  talla: {
    type: String,
    require: true,
  },
  referencia: {
    type: String,
    requiere: true,
  },
  cantidad: {
    type: String,
    require: true,
  },
  precio: {
    type: Number,
    requiere: true,
  },
  descripcion: {
    type: String,
    requiere: true,
  },


  timestamps: true,

});

module.exports = mongoose.model('Factura', shemnaProductos);
