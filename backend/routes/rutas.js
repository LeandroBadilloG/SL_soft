const funcionesProductos = require('../controller/use-cases/use.productos');
const funcionesEmpleados= require('../controller/use-cases/use.empleados');
const funcionesVentas= require('../controller/use-cases/use.ventas');
const funcionesClientes= require('../controller/use-cases/use.cliente');

const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/registroProducto', funcionesProductos.formularioProducto);
router.get('/listarProducto', funcionesProductos.listarProductos);
router.get('/eliminarProducto/:id', funcionesProductos.eliminarProducto);
router.post('/agregarProducto', funcionesProductos.guardaProducto);
router.post('/actualizarProducto/:id', funcionesProductos.actualizarProductos);

router.get('/registroEmpleado', funcionesEmpleados.formularioEmpleado);
router.get('/listarEmpleado', funcionesEmpleados.listarEmpleado);
router.get('/eliminarEmpleado/:id', funcionesEmpleados.eliminarEmpleado);
router.post('/registrarEmpleado', funcionesEmpleados.registrarEmpleado);
router.post('/actualizarEmpleado/:id', funcionesEmpleados.actualizarEmpleado);

router.get('/listarVenta', funcionesVentas.buscarVenta);
router.get('/eliminarVenta/:id', funcionesVentas.eliminarVenta);
router.post('/guardarVenta', funcionesVentas.guardaVenta);
router.post('/actualizarVenta/:id', funcionesVentas.actualizarVentas);

router.get('/registroCliente', funcionesClientes.formularioClientes);
router.post('/registrarCliente', funcionesClientes.agregarClientes);
module.exports = router;
