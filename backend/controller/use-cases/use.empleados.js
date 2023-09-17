const DataEmpleados = require('../data-access/data.empleados');
const DataUsuarios= require('../data-access/data.usuarios');


exports.listarEmpleado = async (req, res) => {
  try {

    const empleados = await DataEmpleados.buscarEmpleados();

    res.status(200).json({resultados: empleados});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error.'});
  };
};

exports.actualizarEmpleado = async (req, res) => {
  try {
    const filtro= {_id: req.paramas.id}
    await DataEmpleados.actualizarEmpleados(filtro,);

    res.status(200).json({mensaje: 'Empleado actualizado'});
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.guardarEmpleado = async (req, res) => {
  try {
    const filtro= {correo: req.body.correo};
    const verificacion= await DataEmpleados.buscarEmpleados(filtro);
    if(verificacion.length === 0){
      const datosEmpleado= {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        documento: req.body.documento,
        correo: req.body.correo,
        cargo: req.body.cargo,
      };
      const datosUsuario= {
        correo: req.body.correo,
        password: req.body.password,
        rol: req.body.rol,
      }
      await DataUsuarios.guardaUsuario(datosUsuario);
      await DataEmpleados.registrarEmpleados(datosEmpleado);
      res.status(200).json({mensaje: 'Empleado registrado'});
    }else {
      res.status(500).json({mensaje: filtro+' Ya esta en uso'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.eliminarEmpleado = async (req, res) => {
  try {
    const resultado = await DataEmpleados.eliminarEmpleados(req.params.id);

    if (resultado) {
      res.status(200).json({mensaje: 'Empleado eliminado'});
    } else {
      res.status(404).json({mensaje: 'Empleado no encontrado'});
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};
