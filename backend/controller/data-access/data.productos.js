const Productos = require('../../models/productos.model');

exports.buscarProducto = async (_filtro, _opciones) => {
  return await Productos.find(_filtro, _opciones);

};

exports.guardaProducto = async (_datos) => {
  return await new Productos(_datos).save();

};

exports.eliminarProducto = async (id) => {
  return await Productos.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      console.log("Deleted : ", docs);
    }
  });
};

exports.actualizarProducto = async (id, _datos) => {
  return await Productos.findByIdAndUpdate(id, _datos);

};
