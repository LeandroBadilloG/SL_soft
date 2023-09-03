const productos = require('../../models/productos.model');

exports.guardaProducto = async (datos) => {
  return await productos.save(datos);
};

exports.eliminarProducto = async (id) => {
  return await productos.findByIdAndDelete({id});
};

exports.buscarProducto = async (_filtro, _opciones)=> {
  const productos = await productos.find(_filtro, _opciones);
  return productos;
};
