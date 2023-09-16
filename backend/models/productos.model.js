const mongoose = require('../config/config.bd');
const SchemnaProductos = new mongoose.Schema({
  nombre: {
    type: String,
    require: [true, 'Se requiere un nombre del producto'],
    max: 30,
    min: 1,
  },
  talla: {
    type: String,
    require: [true, 'Se requiere una talla del producto'],
  },
  referencia: {
    type: String,
    requiere: [true, 'Se requiere una Referencia del producto'],
  },
  cantidad: {
    type: String,
    require: [true, 'Se requiere espesificar la cantidad de productos'],
  },
  precio: {
    type: Number,
    requiere: [true, 'Se requiere espesificar el precio del producto'],
  },
  descripcion: {
    type: String,
    requiere: [true, 'Se requiere una descripcion del producto'],
  },
  categoria: {
    type: String,
    requiere: [true, 'Se requiere una referencia del producto'],
  },

}
, {timestamps: true},
);

const nuevoProducto = mongoose.model('productos', SchemnaProductos);
module.exports = nuevoProducto;
