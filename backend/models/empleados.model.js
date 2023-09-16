const mongoose = require('../config/config');
const SchemaEmpleados = new mongoose.Schema({
  nombre: {
    type: String,
    require: [true, 'Se requiere un nombre del empleado.'],
    min: 2,
    max: 30,
  },
  apellido: {
    type: String,
    require: [true, 'Se requiere un apellido del empleado'],
    min: 2,
    max: 30,
  },
  documento: {
    type: String,
    require: [true, 'Se requiere un documento del empleado'],
    min: 7,
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
},
{timestamps: true},
);
const nuevoEmpleado = mongoose.model('empleados', SchemaEmpleados);
module.exports = nuevoEmpleado;
