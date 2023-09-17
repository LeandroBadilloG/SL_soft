const Usuarios= require('../../models/usuarios.model');

exports.buscarUsuario = async (filtro, opciones) => {
    return await Usuarios.find(filtro, opciones);
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
