const Productos = require('../../models/productos.model');

exports.buscarProducto = async (filtro, opciones) => {
  return await Productos.find(filtro, opciones);
};

exports.guardaProducto = async (datos) => {
  return await new Productos(datos).save();
};

exports.eliminarProducto = async (filtro) => {
  return await Productos.findByIdAndRemove(filtro);
};

exports.actualizarProducto = async (id, datos) => {
  return await Productos.findByIdAndUpdate(id, datos);
};
