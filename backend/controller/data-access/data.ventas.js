const Ventas = require('../../models/ventas.model');

exports.buscarVenta = async (filtro, opciones) => {
  return await Ventas.find(filtro, opciones);
};

exports.guardaVenta = async (datos) => {
  return await new Ventas(datos).save();
};

exports.eliminarVenta = async (id) => {
  return await Ventas.findByIdAndDelete(id, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted :', docs);
    }
  });
};

exports.actualizarVenta = async (id, datos) => {
  return await Ventas.findByIdAndUpdate(id, datos);
};
