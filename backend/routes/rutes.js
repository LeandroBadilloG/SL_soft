const funcionesProductos = require('../controller/use-cases/use.productos');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', funcionesProductos.paginaInicioPrueba);
router.post('/agregar', funcionesProductos.guardaProducto);
router.post('/eliminar/:id',funcionesProductos.eliminarProducto);

module.exports = router;
