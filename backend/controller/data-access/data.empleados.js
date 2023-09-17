const Empleados = require('../../models/empleados.model');


exports.buscarEmpleados = async (filtro, opciones) => {
  try {
    const empleados = await Empleados.find(filtro, opciones);
    if (empleados.length > 0) {
      return {suceso: true, dato: empleados};
    } else {
      return {suceso: false, dato: empleados};
    }
  } catch (error) {
    console.error('Error al buscar empleados:', error);
    return {suceso: false, error: 'Error al buscar empleados'};
  }
};

exports.registrarEmpleados = async (datos) => {
  try {
    const empleado = await new Empleados(datos).save();
    return {suceso: true, dato: empleado};
  } catch (error) {
    console.error('Error al registrar empleado:', error);
    return {suceso: false, error: 'Error al registrar empleado'};
  }
};

exports.eliminarEmpleados = async (id) => {
  try {
    const empleado = await Empleados.findByIdAndDelete(id);
    if (empleado) {
      return {suceso: true, message: 'Empleado eliminado correctamente'};
    } else {
      return {suceso: false, error: 'Empleado no encontrado'};
    }
  } catch (error) {
    console.error('Error al eliminar empleado:', error);
    return {suceso: false, error: 'Error al eliminar empleado'};
  }
};

exports.actualizarEmpleados = async (id, datos) => {
  try {
    const empleado = await Empleados.findByIdAndUpdate(id, datos);
    if (empleado) {
      return {suceso: true, dato: empleado};
    } else {
      return {suceso: false, error: 'Empleado no encontrado'};
    }
  } catch (error) {
    console.error('Error al actualizar empleado:', error);
    return {suceso: false, error: 'Error al actualizar empleado'};
  }
};
