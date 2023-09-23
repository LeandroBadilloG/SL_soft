const DataVentas = require('../data-access/data.ventas');
const DataCliente = require('../data-access/data.clientes');
// const DataProductos = require('../data-access/data.productos');

exports.buscarVenta = async (req, res) => {
  try {
    const ventas = await DataVentas.buscarVenta();
    if (ventas.exito) {
      res.status(200).json({resutados: ventas});
    } else {
      res.status(500).json({mensaje: 'No se encontro ninguna venta registrada'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.actualizarVentas = async (req, res) => {
  try {
    await DataVentas.actualizarVenta(req.paramas.id, req.body);

    res.status(200).json({mensaje: 'Venta actualizada'});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.guardaVenta = async (req, res) => {
  try {
    const idCliente = {_id: req.body.cliente};
    const datosNorequeridos = {'updatedAt': 0, 'createdAt': 0, '_id': 0, '__v': 0};
    const infoCliente = await DataCliente.buscarCliente(idCliente, datosNorequeridos);
    if (infoCliente) {
      const subtotal= req.body.precio * req.body.cantidad;
      const total= subtotal;
      console.log(total);
      const dato = {
        cliente: infoCliente,
        productos: {
          referencia: req.body.referencia,
          nombre: req.body.nombre,
          precio: req.body.precio,
          cantidad: req.body.cantidad,
          talla: req.body.talla,
        },
        subtotal: subtotal,
        totalPago: total,
        metodoPago: req.body.metodoPago,
      };
      const venta = await DataVentas.guardaVenta(dato);
      res.status(200).json({V: venta});
    } else {
      res.status(500).json({mensaje: 'No se encontro la informacion del cliente'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.eliminarVenta = async (req, res) => {
  try {
    const resultado = await DataVentas.eliminarVenta(req.params.id, req.body);

    if (resultado) {
      res.status(200).json({mensaje: 'Venta eliminado'});
    } else {
      res.status(404).json({mensaje: 'Venta no encontrado'});
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};
