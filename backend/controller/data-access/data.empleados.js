const Empleados = require('../../models/empleados.model');


exports.buscarEmpleados = async (filtro, opciones) => {
  try {
    const empleados = await Empleados.find(filtro, opciones);
    if (empleados.length > 0) {
      return empleados;
    } else {
      return {exito: false, error: 'No se encontraron empleados registrados'};
    }
  } catch (error) {
    console.error('Error al buscar empleados:', error);
    return {exito: false, error: 'Error al buscar empleados'};
  }
};

exports.registrarEmpleados = async (datos) => {
  try {
    const empleado = await new Empleados(datos).save();
    if (empleado) {
      return empleado;
    } else {
      return {error: 'No fue posible guardar el empleado'};
    }
  } catch (error) {
    console.error('Error al registrar empleado:', error);
    return {exito: false, error: 'Error al registrar empleado'};
  }
};

exports.eliminarEmpleados = async (id) => {
  try {
    const empleado = await Empleados.findByIdAndDelete(id);
    if (empleado) {
      return {exito: true, message: 'Empleado eliminado correctamente'};
    } else {
      return {exito: false, error: 'Empleado no encontrado'};
    }
  } catch (error) {
    console.error('Error al eliminar empleado:', error);
    return {exito: false, error: 'Error al eliminar empleado'};
  }
};

exports.actualizarEmpleados = async (id, datos) => {
  try {
    const empleado = await Empleados.findByIdAndUpdate(id, datos);
    if (empleado) {
      return {exito: true, dato: empleado};
    } else {
      return {exito: false, error: 'Empleado no encontrado'};
    }
  } catch (error) {
    console.error('Error al actualizar empleado:', error);
    return {exito: false, error: 'Error al actualizar empleado'};
  }
};
