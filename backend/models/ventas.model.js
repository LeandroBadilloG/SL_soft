const mongoose = require('../config/config.bd');
const SchemaVenta = new mongoose.Schema({
  cliente: {
    type: Object,
    required: [true, 'Se requiere la informacion del usiario'],
  },
  productos: {
    type: Object,
    required: [true, 'Se requiere almenos un producto'],
    minlength: 1,
  },
  subtotal: {
    type: Number,
    required: [true, 'Se deve espesificar un sub total de los productos'],
  },
  iva: {
    type: Number,
    default: 19,
  },
  totalPago: {
    type: Number,
    required: [true, 'Se deve espesificar el total de la compra'],
  },
  metodoPago: {
    type: String,
    required: [true, 'Se deve espesificar un metodo de pago'],
  },
}, {timestamps: true} );

const nuevaVenta = mongoose.model('ventas', SchemaVenta);
module.exports =nuevaVenta;
