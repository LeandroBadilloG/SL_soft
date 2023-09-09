const Ventas = require('../../models/ventas.model');

exports.buscarVenta = async (_filtro, _opciones) => {
  return await Ventas.find(_filtro, _opciones);

};

exports.guardaVenta = async (_datos) => {
  return await new Ventas(_datos).save();

};

exports.eliminarVenta = async (id) => {
  return await Ventas.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      console.log("Deleted : ", docs);
    }
  });
};

exports.actualizarVenta = async (id, _datos) => {
  return await Ventas.findByIdAndUpdate(id, _datos);

};
