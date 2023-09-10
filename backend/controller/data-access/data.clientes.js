const Clientes = require('../../models/clientes.model');
// const Usuarios = require('../../models/usuarios.model');

exports.buscarCliente = async (filtro, ...opciones) => {
  return await Clientes.find(filtro, ...opciones);
};

exports.registrarCliente = async (datos) => {
  return await new Clientes(datos).save();
};

exports.eliminarCliente = async (id) => {
  return await Clientes.findByIdAndDelete(id, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('se elimino : ', docs);
    }
  });
};

exports.actualizarCliente = async (id, ...datos) => {
  return await Clientes.findByIdAndUpdate(id, ...datos);
};
