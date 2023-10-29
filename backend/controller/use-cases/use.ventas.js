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
    const datosNoRequeridos = {updatedAt: 0, createdAt: 0, _id: 0, __v: 0};

    const infoCliente = await DataCliente.listarCliente(idCliente, datosNoRequeridos);

    if (!infoCliente) {
      return res.status(500).json({mensaje: 'No se encontró la información del cliente'});
    }

    const productos = req.body.productos;
    const listaProductos = [];
    let total= 0;
    for (const productoId of productos) {
      const filtro = {_id: productoId};
      const datosProducto = {cantidad: 0, _id: 0, __v: 0, updatedAt: 0, createdAt: 0};

      const producto = await DataProductos.buscarProducto(filtro, datosProducto);

      if (!producto) {
        return res.status(500).json({mensaje: 'No se encontró la información del producto'});
      }
      console.log(producto);
      total+= producto.precio;
      listaProductos.push(producto);
    }

    console.log(total);

    const iva = parseFloat(total * 19) / 100;
    const ventaData = {
      cliente: infoCliente,
      productos: listaProductos,
      subtotal: total,
      totalPago: total + iva,
      metodoPago: req.body.metodoPago,
    };

    const venta = await DataVentas.guardaVenta(ventaData);

    if (venta) {
      res.status(200).json({Venta: venta});
    } else {
      res.status(500).json({mensaje: 'No fue posible registrar la venta'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrió un error'});
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
