const Data = require('../data-access/data.ventas');

exports.buscarVenta = async (req, res) => {
  try {
    const filtro = { nombre: req.body };
    const ventas = await Data.buscarVenta(filtro);

    res.status(200).json({ resutados: ventas });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrio un error' });
  }
};

exports.actualizarVentas = async (req, res) => {
  try {

    await Data.actualizarVenta(req.paramas.id, req.body);

    res.status(200).json({ mensaje: 'Venta actualizada' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrio un error' });
  }
}

exports.guardaVenta = async (req, res) => {
  try {

    await Data.guardaVenta(req.body);

    res.status(200).json({ mensaje: 'Venta guardado' });
  } catch (error) {

    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrio un error' });
  }
};

exports.eliminarVenta = async (req, res) => {
  try {

    const resultado = await Data.eliminarVenta(req.params.id, req.body);

    if (resultado) {

      res.status(200).json({ mensaje: 'Venta eliminado' });

    } else {

      res.status(404).json({ mensaje: 'Venta no encontrado' });
    }

  } catch (error) {

    console.error(error);

    res.status(500).json({ mensaje: 'Ocurrio un error' });

  }
};

