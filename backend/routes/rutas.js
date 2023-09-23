const funcionesProductos = require('../controller/use-cases/use.productos');
const funcionesEmpleados= require('../controller/use-cases/use.empleados');
const funcionesVentas= require('../controller/use-cases/use.ventas');

const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/listarProducto', funcionesProductos.listarProductos);
router.get('/eliminarProducto/:id', funcionesProductos.eliminarProducto);
router.post('/agregarProducto', funcionesProductos.guardaProducto);
router.post('/actualizarProducto/:id', funcionesProductos.actualizarProductos);

router.get('/listarEmpleado', funcionesEmpleados.listarEmpleado);
router.get('/eliminarEmpleado/:id', funcionesEmpleados.eliminarEmpleado);
router.post('/registrarEmpleado', funcionesEmpleados.registrarEmpleado);
router.post('/actualizarEmpleado/:id', funcionesEmpleados.actualizarEmpleado);

router.post('/registrarventa', funcionesVentas.guardaVenta);

module.exports = router;
