const Clientes = require('../../models/clientes.model');
const Usuarios = require('../../models/usuarios.model')

exports.buscarCliente = async (_filtro, _opciones) => {
  return await Clientes.find(_filtro, _opciones);

};

exports.registrarCliente = async (_datos) => {
  return await new Clientes(_datos).save();

};

exports.eliminarCliente = async (id) => {
  return await Clientes.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      console.log('se elimino : ', docs);
    }
  });
};

exports.actualizarCliente = async (id, _datos) => {
  return await Clientes.findByIdAndUpdate(id, _datos);

};
