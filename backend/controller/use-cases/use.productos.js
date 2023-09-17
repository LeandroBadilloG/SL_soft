const Data = require('../data-access/data.productos');

exports.listarProductos = async (req, res) => {
  try {
    const productos = await Data.buscarProducto();
    res.status(200).json({resutados: productos});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.actualizarProductos = async (req, res) => {
  try {
    const filtro ={_id: req.params.id};
    const cantidadPorTallas = req.body.talla;
    let cantidadTotal= 0;
    for (const talla in cantidadPorTallas) {
      if (cantidadPorTallas.hasOwnProperty(talla)) {
        cantidadTotal += cantidadPorTallas[talla];
      }
    }
    const datos= {
      nombre: req.body.nombre,
      talla: req.body.talla,
      referencia: req.body.referencia,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      cantidad: cantidadTotal,
      categoria: req.body.categoria,
    };
    await Data.actualizarProducto(filtro, datos);
    res.status(200).json({mensaje: 'Producto actualizado', productoN});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.guardaProducto = async (req, res) => {
  try {
    const filtro = {referencia: req.body.referencia};
    const verificacion = await Data.buscarProducto(filtro);
    if (verificacion.length == 0) {
      const cantidadPorTallas = req.body.talla;
      let cantidadTotal= 0;
      for (const talla in cantidadPorTallas) {
        if (cantidadPorTallas.hasOwnProperty(talla)) {
          cantidadTotal += cantidadPorTallas[talla];
        }
      }
      console.log(cantidadPorTallas);
      const datos= {
        nombre: req.body.nombre,
        talla: req.body.talla,
        referencia: req.body.referencia,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        cantidad: cantidadTotal,
        categoria: req.body.categoria,
      };
      await Data.guardaProducto(datos);
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
    const filtro = {_id: req.params.id};
    await Data.eliminarProducto(filtro);
    res.status(200).json({mensaje: 'Producto eliminado'});
  } catch (error) {
    console.error(error);

    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

// exports.paginaInicioPrueba = async (req, res) => {
//   const filtro = {nombre: req.body.nombre};
//   res.render('inicio', {
//     productos: await Data.buscarProducto(),
//     filtroProductos: await Data.buscarProducto(filtro),
//   });
// };
