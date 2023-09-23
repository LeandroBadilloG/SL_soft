const DataEmpleados = require('../data-access/data.empleados');
const DataUsuarios= require('../data-access/data.usuarios');


exports.listarEmpleado = async (req, res) => {
  try {
    const empleados = await DataEmpleados.buscarEmpleados();
    if (empleados.exito === false) {
      res.status(500).json({mensaje: 'No se encontro empleados registrados'});
    } else {
      res.status(200).json({resultados: empleados});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error.'});
  };
};

exports.actualizarEmpleado = async (req, res) => {
  try {
    const filtro= {_id: req.params.id};
    const datos= {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      documento: req.body.documento,
      correo: req.body.correo,
      cargo: req.body.cargo,
      estado: req.body.estado,
    };
    const empleado= await DataEmpleados.actualizarEmpleados(filtro, datos);
    if (empleado.exito === false) {
      return res.status(500).json({mensaje: 'No fue Posile actualizar el empleado'});
    } else {
      const datos= {
        correo: req.body.correo,
        password: req.body.password,
        rol: req.body.rol,
      };
      const usuario= await DataUsuarios.actualizarUsuario(filtro, datos);
      if (usuario.exito) {
        return res.status(200).json({mensaje: 'Empleado actualizado'});
      } else {
        return res.status(500).json({mensaje: 'No fue Posile actualizar el usuario'});
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.registrarEmpleado = async (req, res) => {
  try {
    const filtro= {correo: req.body.correo};

    const verificacion= await DataEmpleados.buscarEmpleados(filtro);

    if (verificacion.exito) {
      return res.status(500).json({mensaje: 'El correo ya esta en uso'});
    } else {
      const datosEmpleado= {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        documento: req.body.documento,
        correo: req.body.correo,
        cargo: req.body.cargo,
      };
      const nuevoEmpleado = await DataEmpleados.registrarEmpleados(datosEmpleado);

      if (nuevoEmpleado.exito) {
        const datosUsuario= {

          _id: nuevoEmpleado.dato._id,
          correo: req.body.correo,
          password: req.body.password,
          rol: req.body.rol,
        };
        const usuario= await DataUsuarios.guardaUsuario(datosUsuario);
        if (usuario.exito === false) {
          return res.status(500).json({mensaje: 'No fue posible guardar el usuario'});
        } else {
          return res.status(200).json({mensaje: 'Empleado registrado'});
        }
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};

exports.eliminarEmpleado = async (req, res) => {
  try {
    const filtro= {_id: req.params.id};
    const empleado = await DataEmpleados.eliminarEmpleados(filtro);
    if (empleado.exito === false) {
      res.status(500).json({mensaje: 'No fue posible eliminar el empleado'});
    } else {
      const usuario= await DataUsuarios.eliminarUsuario(filtro);
      if (usuario.exito == false) {
        res.status(500).json({mensaje: 'No fue posible eliminar el usuario'});
      } else {
        res.status(200).json({mensaje: 'Empleado eliminado'});
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error'});
  }
};
