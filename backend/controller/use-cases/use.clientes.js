const Data = require('../data-access/data.clientes');

exports.buscarCliente = async (req, res) => {
  try {
    const filtro = {nombre: req.body.nombre};
    const clientes = await Data.buscarCliente(filtro);

    res.status(200).json({resultados: clientes});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error.'});
  };
};

exports.actualizarCliente = async (req, res) => {
  try {
    filtro= {_id: req.params.id};
    datos= {}
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

    if (verificacion != null) {
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

