const Data = require('../data-access/data.empleados');

exports.buscarEmpleado = async (req, res) => {
  try {
    const filtro = req.body;
    const empleados = await Data.buscarEmpleado(filtro);

    res.status(200).json({ resultados: empleados });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrio un error.' });
  };

};

exports.actualizarEmpleado = async (req, res) => {
  try {

    await Data.actualizarEmpleado(req.paramas.id, req.body);

    res.status(200).json({ mensaje: 'Empleado actualizado' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrio un error' });
  }
};

exports.guardarEmpleado = async (req, res) => {
  try {
    await Data.registrarEmpleado(req.body);

    res.status(200).json({ mensaje: 'Empleado registrado' });
  } catch (error) {

    console.error(error);
    res.status(500).json({ mensaje: 'Ocurrio un error' });
  }
};

exports.eliminarEmpleado = async (req, res) => {
  try {

    const resultado = await Data.eliminarEmpleado(req.params.id);

    if (resultado) {

      res.status(200).json({ mensaje: 'Empleado eliminado' });

    } else {

      res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }

  } catch (error) {

    console.error(error);

    res.status(500).json({ mensaje: 'Ocurrio un error' });

  }
};