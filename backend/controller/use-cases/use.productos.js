const Data = require('../data-access/data.productos');

exports.buscarProducto = async (req, res) => {
  try {
    const filtro = {nombre: req.body};
    const productos = await Data.buscarProducto(filtro);

    res.status(200).json({resutados: productos});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.actualizarProductos = async (req, res) => {
  try {
    await Data.actualizarProducto(req.paramas.id, req.body);

    res.status(200).json({mensaje: 'Producto actualizado'});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.guardaProducto = async (req, res) => {
  try {
    const {referencia} = req.body;
    const verificacion = await Data.buscarProducto(referencia);
    if (verificacion != null) {
      await Data.guardaProducto(req.body);
      res.status(200).json({mensaje: 'Producto guardado'});
    } else {
      res.status(500).json({mensaje: 'La referencia ya existe'});
    };
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    const resultado = await Data.eliminarProducto(req.params.id, req.body);

    if (resultado) {
      res.status(200).json({mensaje: 'Producto eliminado'});
    } else {
      res.status(404).json({mensaje: 'Producto no encontrado'});
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.paginaInicioPrueva = (req, res) => {
  res.render('inicio');
};
