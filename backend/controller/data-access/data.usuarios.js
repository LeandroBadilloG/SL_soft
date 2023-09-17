const Usuarios= require('../../models/usuarios.model');

exports.buscarUsuario = async (filtro, opciones) => {
  try {
    const usuarios = await Usuarios.find(filtro, opciones);
    if (usuarios.length > 0) {
      return {suceso: true, dato: usuarios};
    } else {
      return {suceso: false, dato: usuarios};
    }
  } catch (error) {
    console.error('Error al buscar usuarios:', error);
    return {suceso: false, error: 'Error al buscar Usuarios'};
  }
};

exports.guardaUsuario = async (datos) => {
  return await new Usuarios(datos).save();
};

exports.eliminarUsuario = async (filtro) => {
  return await Usuarios.findByIdAndDelete(filtro);
};

exports.actualizarUsuario = async (id, datos) => {
  return await Usuarios.findByIdAndUpdate(id, datos);
};
