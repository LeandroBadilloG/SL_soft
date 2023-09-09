const Data = require('../data-access/data.clientes');

exports.buscarCliente = async (req, res) => {
  try {
    const filtro = req.body;
    const clientes = await Data.buscarCliente(filtro);

    res.status(200).json({ resultados: clientes });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrio un error.' });
  };

};

exports.actualizarCliente = async (req, res) => {
  try {

    await Data.actualizarCliente(req.paramas.id, req.body);

    res.status(200).json({ mensaje: 'Cliente actualizado' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrio un error' });
  }
};

exports.guardarCliente = async (req, res) => {
  try {
    await Data.registrarCliente(req.body);

    res.status(200).json({ mensaje: 'Cliente registrado' });
  } catch (error) {

    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrio un error' });
  }
};

exports.eliminarCliente = async (req, res) => {
  try {

    const resultado = await Data.eliminarCliente(req.params.id);

    if (resultado) {

      res.status(200).json({ mensaje: 'Cliente eliminado' });

    } else {

      res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }

  } catch (error) {

    console.error(error);

    res.status(500).json({ mensaje: 'Ocurrio un error' });

  }
};

