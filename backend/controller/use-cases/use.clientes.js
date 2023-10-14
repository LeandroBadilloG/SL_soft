const DataCliente = require('../data-access/data.clientes');

exports.listarCliente = async (req, res) => {
  try {
    const filtro = req.body;
    const clientes = await DataCliente.listarCliente(filtro);
    res.json({clientes: clientes});
  } catch (error) {
    console.log(error);
  }
};

exports.actualizarCliente = async (req, res) => {
  try {
    filtro= {_id: req.params.id};
    datos= {};
    await Data.actualizarCliente(filtro, datos);

    res.status(200).json({mensaje: 'Cliente actualizado'});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.registrarCliente = async (req, res) => {
  try {
    const {documento} = req.body;
    const verificacion= await Data.buscarCliente(documento);

    if (!verificacion) {
      await Data.registrarCliente(req.body);
      res.status(200).json({mensaje: 'Cliente registrado'});
    } else {
      res.status(500).json({mensaje: 'El usuario ya existe'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.eliminarCliente = async (req, res) => {
  try {
    const resultado = await Data.eliminarCliente(req.params.id);

    if (resultado) {
      res.status(200).json({mensaje: 'Cliente eliminado'});
    } else {
      res.status(404).json({mensaje: 'Cliente no encontrado'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

