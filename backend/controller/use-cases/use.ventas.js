const DataVentas = require('../data-access/data.ventas');
const DataCliente = require('../data-access/data.clientes');
const DataProductos = require('../data-access/data.productos');

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
      const listaProductos= [];
      const productos= req.body.productos;
      for (let i=0; i < productos.length; i++) {
        const filtro = {_id: productos[i]};
        const datos = {'cantidad': 0, '_id': 0, '__v': 0, 'updatedAt': 0, 'createdAt': 0};
        const producto = await DataProductos.buscarProducto(filtro, datos);
        if (producto.exito === false) {
          res.status(500).json({mensaje: 'No se encontro la informacion del producto'});
        } else {
          listaProductos= producto + producto;
        }
      }
      const dato = {
        cliente: infoCliente,
        productos: listaProductos,
        subtotal: req.body.subtotal,
        totalPago: req.body.totalPago,
        metodoPago: req.body.metodoPago,
      };
      const venta = await DataVentas.guardaVenta(dato);
      if (venta) {
        res.status(200).json({Venta: venta});
      } else {
        res.status(500).json({mensaje: 'No fue posible registrar la venta'});
      }
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
