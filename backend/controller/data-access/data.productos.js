const Productos = require('../../models/productos.model');

exports.buscarProducto = async (filtro, opciones) => {
  return await Productos.find(filtro, opciones);
};

exports.guardaProducto = async (datos) => {
  return await new Productos(datos).save();
};

exports.eliminarProducto = async (id) => {
  return await Productos.findByIdAndDelete(id, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted: ', docs);
    }
  });
};

exports.actualizarProducto = async (id, datos) => {
  return await Productos.findByIdAndUpdate(id, datos);
};
