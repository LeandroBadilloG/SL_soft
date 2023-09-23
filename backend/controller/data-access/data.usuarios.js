const Usuarios= require('../../models/usuarios.model');

exports.buscarUsuario = async (filtro, opciones) => {
  try {
    const usuarios = await Usuarios.find(filtro, opciones);
    if (usuarios.length > 0) {
      return {exito: true, dato: usuarios};
    } else {
      return {exito: false, error: 'No se encontro ningun usuario'};
    }
  } catch (error) {
    console.error('Error al buscar usuarios:', error);
    return {exito: false, error: 'Error al buscar Usuarios'};
  }
};

exports.guardaUsuario = async (datos) => {
  try {
    const usuario = await new Usuarios(datos).save();
    if (usuario) {
      return {exito: true, dato: usuario};
    } else {
      return {exito: false, error: 'No fue posible guardar el usuario'};
    }
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return {exito: false, error: 'Error al registrar usuario'};
  }
};

exports.eliminarUsuario = async (id) => {
  try {
    const usuario = await Usuarios.findByIdAndDelete(id);
    if (usuario) {
      return {exito: true, message: 'usuario eliminado correctamente'};
    } else {
      return {exito: false, error: 'No fue posible eliminar el usuario'};
    }
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    return {exito: false, error: 'Error al eliminar usuario'};
  }
};

exports.actualizarUsuario = async (id, datos) => {
  try {
    const usuario = await Usuarios.findOneAndUpdate(id, datos);
    if (usuario) {
      return {exito: true, dato: usuario};
    } else {
      return {exito: false, error: 'No fue posible actualizar el usuario'};
    }
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    return {exito: false, error: 'Error al actualizar usuario'};
  }
};
