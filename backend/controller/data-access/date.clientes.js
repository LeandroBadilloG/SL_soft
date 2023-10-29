const Clientes = require('../../models/clientes.models');

exports.agregarC = async (agragarCliente) => {
  try {
    const nuevoCliente = new Clientes(agragarCliente);
    const nuevoCliente1 = await nuevoCliente.save();

    return nuevoCliente1;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.buscarClientes = async (filtro) => {
  try {
    const clientes = await Clientes.find(filtro);
    if (clientes.length > 0) {
      return clientes;
    } else {
      return ('Error en el servidor de clientes');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.eliminarC = async (id) => {
  try {
    const eliminar = await Clientes.findByIdAndDelete(id);
    console.log(eliminar);
    if (!eliminar) {
      return ('Error en el servidor de clientes');
    } else {
      return eliminar;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.actualizarC = async (id, actualizarDatos) => {
  try {
    const actualizar = await Clientes.findByIdAndUpdate(id, actualizarDatos);
    return actualizar;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
