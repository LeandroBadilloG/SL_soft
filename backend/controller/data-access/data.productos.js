const Productos = require('../../models/productos.model');

exports.buscarProducto = async (filtro, opciones) => {
  try {
    const productos = await Productos.find(filtro, opciones);
    if (productos.length > 0) {
      return productos;
    } else {
      return {exito: false, dato: productos};
    }
  } catch (error) {
    console.error('Error al buscar los Productos:', error);
    return {exito: false, error: 'Error al buscar Productos'};
  }
};

exports.guardaProducto = async (datos) => {
  try {
    const productos = await new Productos(datos).save();
    return productos;
  } catch (error) {
    console.error('Error al registrar Producto:', error);
    return {exito: false, error: 'Error al registrar Producto'};
  }
};

exports.eliminarProducto = async (filtro) => {
  try {
    const producto = await Productos.findByIdAndDelete(filtro);
    if (producto) {
      return {exito: true, message: 'producto eliminado correctamente'};
    } else {
      return {exito: false, error: 'producto no encontrado'};
    }
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    return {exito: false, error: 'Error al eliminar producto'};
  }
};

exports.actualizarProducto = async (id, datos) => {
  try {
    const producto = await Productos.findByIdAndUpdate(id, datos);
    if (producto) {
      return {exito: true, dato: producto};
    } else {
      return {exito: false, error: 'producto no encontrado'};
    }
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    return {exito: false, error: 'Error al actualizar producto'};
  }
};
