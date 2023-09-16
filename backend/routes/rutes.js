const funcionesProductos = require('../controller/use-cases/use.productos');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', funcionesProductos.paginaInicioPrueba);
router.post('/agregar', funcionesProductos.guardaProducto);
router.get('/eliminar/:id', funcionesProductos.eliminarProducto);
router.post('/busqueda', funcionesProductos.paginaInicioPrueba);
router.post('/actualizar/:id', funcionesProductos.actualizarProductos);

module.exports = router;
