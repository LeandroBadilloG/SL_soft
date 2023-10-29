const datosUsuario = require('../data-access/data.usuario');
const datosCliente = require('../data-access/date.clientes');

// login

exports.login = async (req, res) => {
  try {
    const correoElectronico = ({email: req.body.email, password: req.body.password});
    const validarCorreo = await datosUsuario.buscarUsuario(correoElectronico);
    if (validarCorreo) {
      const clienteCorreo = await datosCliente.buscarClientes({email: correoElectronico.email});
      console.log(clienteCorreo);
      if (clienteCorreo) {
        const datos = await clienteCorreo({'_id': 0});
        res.status(200).json(datos);
      } else {
        res.status(500).json({message: 'El cliente no se encontro'});
      }
    } else {
      res.status(500).json({message: 'El usuario no existe'});
    };
  } catch (error) {
    console.log(error);
  }
};
