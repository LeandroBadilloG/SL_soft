const DataEmpleados = require('../data-access/data.empleados');
const DataUsuarios= require('../data-access/data.usuarios');

exports.formularioEmpleado = async (req, res) => {
  const listaEmpleados= await DataEmpleados.buscarEmpleados();
  res.render('formularioEmpleado', {
    empleados: listaEmpleados,
  });
};

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
      email: req.body.email,
      cargo: req.body.cargo,
      estado: req.body.estado,
    };
    const empleado= await DataEmpleados.actualizarEmpleados(filtro, datos);
    if (empleado.exito === false) {
      return res.status(500).json({mensaje: 'No fue Posile actualizar el empleado'});
    } else {
      const datos= {
        email: req.body.email,
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
    console.log(req.body);
    const filtro= {email: req.body.email};
    const verificarEmpleado= await DataEmpleados.buscarEmpleados(filtro);
    const verificarUsuario= await DataUsuarios.buscarUsuario(filtro);
    if (verificarEmpleado.length > 0 || verificarUsuario.length > 0) {
      return res.status(500).json({mensaje: 'El email ya esta en uso'});
    } else {
      const datosEmpleado= {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        documento: req.body.documento,
        email: req.body.email,
        cargo: req.body.cargo,
        estado: req.body.estado,
      };
      const nuevoEmpleado = await DataEmpleados.registrarEmpleados(datosEmpleado);
      if (nuevoEmpleado) {
        const datosUsuario= {
          _id: nuevoEmpleado._id,
          email: req.body.email,
          password: req.body.password,
          rol: req.body.rol,
        };
        console.log('datos enviados Usuario: '+{datosUsuario});
        const usuario= await DataUsuarios.guardaUsuario(datosUsuario);
        if (!usuario) {
          return res.status(500).json({mensaje: 'No fue posible guardar el usuario'});
        } else {
          res.send('Cliente registrado');
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
