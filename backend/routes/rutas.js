const funcionesProductos = require('../controller/use-cases/use.productos');
const funcionesEmpleados= require('../controller/use-cases/use.empleados');
const funcionesVentas= require('../controller/use-cases/use.ventas');

const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   productos:
 *    type: object
 *    properties:
 *     nombre:
 *      type: string
 *      description: Se necesita un nombre para el producto
 *     talla:
 *      type: string
 *      description: Se necesita un talla para el producto
 *     referencia:
 *      type: string
 *      description: Se necesita una referencia para identificar el producto
 *     cantidad:
 *      type: number
 *      description: Se necesita la cantidad de unidades disponibles
 *     precio:
 *      type: number
 *      description: Se necesita el precio por unidiad
 *     categoria:
 *      type: string
 *      description: Se necesita una categoria para agrupar los productos
 *    required:
 *     - nombre
 *     - referencia
 *     - cantidad
 *     - precio
 *     - descripcion
 *     - categoria
 *    example:
 *     nombre: pantalon
 *     talla: M
 *     referencia: P008
 *     cantidad: 50
 *     precio: 100000
 *     descripcion: El mejor pantalon que veras en tu vida
 *     categoria: Pantalones
 */
router.get('/listarProducto', funcionesProductos.listarProductos);
router.get('/eliminarProducto/:id', funcionesProductos.eliminarProducto);
router.post('/agregarProducto', funcionesProductos.guardaProducto);
router.post('/actualizarProducto/:id', funcionesProductos.actualizarProductos);

router.get('/listarEmpleado', funcionesEmpleados.listarEmpleado);
router.get('/eliminarEmpleado/:id', funcionesEmpleados.eliminarEmpleado);
router.post('/registrarEmpleado', funcionesEmpleados.registrarEmpleado);
router.post('/actualizarEmpleado/:id', funcionesEmpleados.actualizarEmpleado);

router.post('/registrarVenta', funcionesVentas.guardaVenta);

module.exports = router;
