const funcionesProductos = require('../controller/use-cases/use.productos');
const funcionesEmpleados= require('../controller/use-cases/use.empleados');

const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/listarProducto', funcionesProductos.listarProductos);
router.post('/agregarProducto', funcionesProductos.guardaProducto);
router.get('/eliminarProducto/:id', funcionesProductos.eliminarProducto);
router.post('/actualizarProducto/:id', funcionesProductos.actualizarProductos);

router.get('/listarEmpleados', funcionesEmpleados.listarEmpleado);
router.get('/eliminarEmpleados', funcionesEmpleados.eliminarEmpleado);
router.post('/registrarEmpleados', funcionesEmpleados.guardarEmpleado);
router.post('/actualizarEmpleados/:id', funcionesEmpleados.actualizarEmpleado);

module.exports = router;
