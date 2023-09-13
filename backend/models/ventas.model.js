const mongoose = require('../config/config');
const SchemaVenta = new mongoose.Schema({
  cliente: [
    {
      nombre: {
        type: String,
        require: [true, 'Se requiere un nombre del cliente'],
      },
      apellido: {
        type: String,
        require: [true, 'Se requiere los apellido del cliente'],
      },
      celular: {
        type: String,
        default: 'Sin registrar numero celular',
      },
      direccion: {
        type: String,
        default: 'Sin registrar direccion',
      },
    },
  ],
  iva: {
    type: Number,
    default: 'Sin IVA',
  },
  metodoPago: {
    type: String,
    require: [true, 'Se deve espesificar un metodo de pago'],
  },
  pedido: {
    type: String,
    default: 'aprobado',
  },
  timestamps
});

const nuevaVenta = mongoose.model('ventas', SchemaVenta);
module.exports =nuevaVenta;
