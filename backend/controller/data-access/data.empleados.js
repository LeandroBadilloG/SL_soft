const Empleados = require('../../models/empleados.model');


exports.buscarEmpleados = async (filtro, opciones) => {
  return await Empleados.find(filtro, opciones);
};

exports.registrarEmpleados = async (datos) => {
  return await new Empleados(datos).save();
};

exports.eliminarEmpleados = async (id) => {
  return await Empleados.findByIdAndDelete(id, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('se elimino : ', docs);
    }
  });
};

exports.actualizarEmpleados = async (id, datos) => {
  return await Empleados.findByIdAndUpdate(id, datos);
};
