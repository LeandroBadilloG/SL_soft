const Empleados = require('../../models/empleados.model');


exports.buscarEmpleados = async (_filtro, _opciones) => {
  return await Empleados.find(_filtro, _opciones);

};

exports.registrarEmpleados = async (_datos) => {
  return await new Empleados(_datos).save();

};

exports.eliminarEmpleados = async (id) => {
  return await Empleados.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      console.log(err)
    }
    else {
      console.log('se elimino : ', docs);
    }
  });
};

exports.actualizarEmpleados = async (id, _datos) => {
  return await Empleados.findByIdAndUpdate(id, _datos);

};