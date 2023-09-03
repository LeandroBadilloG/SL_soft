const Data = require('../data-access/controller.products');

exports.registrarProductos = async (req, res) => {
  try {
    await Data.guardaProducto(req.body);
  } catch (err) {
    alert('¡Un error ha ocurrido!');
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    await Data.eliminarProducto(req.body);
  } catch (err) {
    alert('¡Un error ha ocurrido!');
  }
};

exports.buscarProducto = async (req, res) => {
  await Data.buscarProducto();
};
