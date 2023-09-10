const mongoose = require('../config/config');
const SchemaEmpleados = new mongoose.Schema({
  nombre: {
    type: String,
    require: [true, 'Se requiere un nombre del empleado.'],
  },
  apellido: {
    type: String,
    require: [true, 'Se requiere un apellido del empleado'],
  },
  documento: {
    type: String,
    require: [true, 'Se requiere un documento del empleado'],

  },
  correo: {
    type: Strintg,
    require: [true, 'Se requiere un correo'],
  },
  cargo: {
    type: String,
    require: [true, 'Se deve espesificar que cargo tiene el trabajador'],
  },
  estado: {
    type: Boolean,
    undefined: true,
  },
  usuario: {
    type: Schema.Type.Object,
  },
});

module.exports = mongoose.model('empleados', SchemaEmpleados);
