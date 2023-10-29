const Data = require('../data-access/data.productos');

exports.formularioProducto = (req, res) => {
  res.render('formularioProducto');
};

exports.listarProductos = async (req, res) => {
  try {
    const productos = await Data.buscarProducto();
    if (productos.exito === false) {
      res.status(500).json({mensaje: 'No se encontro ningun producto'});
    } else {
      res.status(200).json(productos);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.actualizarProductos = async (req, res) => {
  try {
    const filtro ={_id: req.params.id};
    const datos= {
      nombre: req.body.nombre,
      talla: req.body.talla,
      referencia: req.body.referencia,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      cantidad: req.body.cantidad,
      categoria: req.body.categoria,
    };
    const producto= await Data.actualizarProducto(filtro, datos);
    if (producto.exito === false) {
      res.status(500).json({mensaje: 'No fue posible actualizar el producto'});
    } else {
      res.status(200).json({mensaje: 'Producto actualizado'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.guardaProducto = async (req, res) => {
  try {
    const datos= {
      nombre: req.body.nombre,
      talla: req.body.talla,
      referencia: req.body.referencia,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      cantidad: req.body.cantidad,
      categoria: req.body.categoria,
    };
    const nuevoProducto= await Data.guardaProducto(datos);
    if (!nuevoProducto) {
      res.status(500).json({mensaje: 'No se pudo guardar el producto capa 1'});
    }
    res.status(200).json({mensaje: 'Producto guardado'});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error', error});
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    const filtro = {_id: req.params.id};
    const producto = await Data.eliminarProducto(filtro);
    if (producto.exito === false) {
      res.status(500).json({mensaje: 'No se pudo eliminar el producto'});
    } else {
      res.status(200).json({mensaje: 'Producto eliminado'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error', error});
  }
};
