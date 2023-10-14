const funcionesProductos = require('../controller/use-cases/use.productos');
const funcionesEmpleados= require('../controller/use-cases/use.empleados');
const funcionesVentas= require('../controller/use-cases/use.ventas');
const funcionesClientes= require('../controller/use-cases/use.clientes');

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
 *     - talla
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

/**
 * @swagger
 * /v1/agregarProducto:
 *  post:
 *   summary: agregar un producto
 *   tags: [productos]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/productos'
 *   responses:
 *    200:
 *     description: nuevo producto fue agregado
 */

/**
 * @swagger
 * /v1/actualizarProducto/{id}:
 *  post:
 *   summary: actualizar un producto
 *   tags: [productos]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: se requiere un id
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/productos'
 *   responses:
 *    200:
 *     description: productos
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/productos'
 */

/**
 * @swagger
 * /v1/listarProducto:
 *  get:
 *   summary: listar productos
 *   tags: [productos]
 *   responses:
 *    200:
 *     description: productos
 *     content:
 *      aplplication/json:
 *       schema:
 *        type: array
 *        items:
 *          $ref: '#/components/schemas/productos'
 */

/**
 * @swagger
 * /v1/eliminarProducto/{id}:
 *  get:
 *   summary: eliminar un producto
 *   tags: [productos]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: se requiere un id
 *   responses:
 *    200:
 *     description: productos
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/productos'
 */

router.get('/listarProducto', funcionesProductos.listarProductos);
router.get('/eliminarProducto/:id', funcionesProductos.eliminarProducto);
router.post('/agregarProducto', funcionesProductos.guardaProducto);
router.post('/actualizarProducto/:id', funcionesProductos.actualizarProductos);

/**
 * @swagger
 * components:
 *  schemas:
 *   empleados:
 *    type: object
 *    properties:
 *     nombre:
 *      type: string
 *      description: Se necesita un nombre del cliente
 *     apellido:
 *      type: string
 *      description: Se requiere un apellido del cliente
 *     documento:
 *      type: string
 *      description: Se requiere un documento del cliente
 *     correo:
 *      type: string
 *      description: Se requiere un correo
 *     estado:
 *      type: string
 *      description: Se requiere el estado del  empledo
 *     password:
 *      type: string
 *      description: Se requiere una clave del emleado
 *     cargo:
 *      type: string
 *      description: Se requiere espesificar el cargo del empleado
 *     rol:
 *      type: string
 *      description: Se requiere definir el rol a empleado
 *    required:
 *     - nombre
 *     - apellido
 *     - documento
 *     - correo
 *     - estado
 *     - password
 *     - cargo
 *     - rol
 *    example:
 *     nombre: Leandro
 *     apellido: Badillo Giraldo
 *     documento: 17283498877
 *     correo: leo@gmail.com
 *     estado: true
 *     password: Leandro123
 *     cargo: Supervisor
 *     rol: Empleado
 */

/**
 * @swagger
 * /v1/registrarEmpleado:
 *  post:
 *   summary: agregar un empleado
 *   tags: [empleados]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/empleados'
 *   responses:
 *    200:
 *     description: empleado registrado
 */

/**
 * @swagger
 * /v1/actualizarEmpleado/{id}:
 *  post:
 *   summary: actualizar un empleado
 *   tags: [empleados]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: se requiere un id
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/empleados'
 *   responses:
 *    200:
 *     description: empleados
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/empleados'
 */

/**
 * @swagger
 * /v1/listarEmpleado:
 *  get:
 *   summary: listar empleado
 *   tags: [empleados]
 *   responses:
 *    200:
 *     description: empleado
 *     content:
 *      aplplication/json:
 *       schema:
 *        type: array
 *        items:
 *          $ref: '#/components/schemas/empleados'
 */

/**
 * @swagger
 * /v1/eliminarEmpleado/{id}:
 *  get:
 *   summary: eliminar un empleado
 *   tags: [empleados]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: se requiere un id
 *   responses:
 *    200:
 *     description: empleado
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/empleados'
 */

router.get('/listarEmpleado', funcionesEmpleados.listarEmpleado);
router.get('/eliminarEmpleado/:id', funcionesEmpleados.eliminarEmpleado);
router.post('/registrarEmpleado', funcionesEmpleados.registrarEmpleado);
router.post('/actualizarEmpleado/:id', funcionesEmpleados.actualizarEmpleado);

/**
 * @swagger
 * components:
 *  schemas:
 *   ventas:
 *    type: object
 *    properties:
 *     cliente:
 *      type: Object
 *      description: Se necesita los datos del cliente cliente
 *     productos:
 *      type: Object
 *      description: Se requiere los id de los productos
 *     metodoPago:
 *      type: string
 *      description: Se requiere un documento del cliente
 *    required:
 *     - cliente
 *     - productos
 *     - metodoPago
 *    example:
 *     cliente: 6514a85316360d6c43b77cc7
 *     prodctos: {'65289cedfb3ea3e6f81bc7e4','6528b4c6511c5a6745c911b6'}
 *     metodoPago: Cuando llegue le digo
 */


/**
 * @swagger
 * /v1/listarVenta:
 *  get:
 *   summary: listar Venta
 *   tags: [ventas]
 *   responses:
 *    200:
 *     description: ventas encontrados
 *     content:
 *      aplplication/json:
 *       schema:
 *        type: array
 *        items:
 *          $ref: '#/components/schemas/ventas'
 */

/**
 * @swagger
 * /v1/eliminarVenta/{id}:
 *  get:
 *   summary: eliminar venta
 *   tags: [ventas]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: se requiere un id
 *   responses:
 *    200:
 *     description: La veta fue eliminada
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/ventas'
 */


router.get('/listarVenta', funcionesVentas.buscarVenta);
router.get('/eliminarVenta/:id', funcionesVentas.eliminarVenta);
router.post('/registrarVenta', funcionesVentas.guardaVenta);
router.post('/actualizarVenta/:id', funcionesVentas.actualizarVentas);

/**
 * @swagger
 * components:
 *  schemas:
 *   clientes:
 *    type: object
 *    properties:
 *     nombre:
 *      type: string
 *      description: Se necesita un nombre del cliente
 *     apellido:
 *      type: string
 *      description: Se requiere un apellido del cliente
 *     documento:
 *      type: string
 *      description: Se requiere un documento del cliente
 *     celular:
 *      type: string
 *      description: Se requiere un numero de contacto del cliente
 *     correo:
 *      type: string
 *      description: Se requiere un correo del cliente
 *     direccion:
 *      type: string
 *      description: Se requiere la direccion del cliente
 *     password:
 *      type: string
 *      description: Se requiere una clave del cliente
 *     rol:
 *      type: string
 *      description: Se requiere espesificar el rol a cliente
 *    required:
 *     - nombre
 *     - apellido
 *     - documento
 *     - celular
 *     - correo
 *     - direccion
 *     - password
 *     - rol
 *    example:
 *     nombre: Leandro
 *     apellido: Badillo Giraldo
 *     documento: 17283498877
 *     celular: 300732839
 *     correo: leo@gmail.com
 *     direccion: cll 45 # 43- 03
 *     password: Leandro123
 *     rol: Cliente
 */

/**
 * @swagger
 * /v1/registrarCliente:
 *  post:
 *   summary: agregar cliente
 *   tags: [clientes]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/clientes'
 *   responses:
 *    200:
 *     description: Cliente registrado
 */

/**
 * @swagger
 * /v1/actualizarClientes/{id}:
 *  post:
 *   summary: Actualizar cliente
 *   tags: [clientes]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: se requiere un id
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/clientes'
 *   responses:
 *    200:
 *     description: Cliente Actualizado
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/clientes'
 */

/**
 * @swagger
 * /v1/listarCliente:
 *  get:
 *   summary: listar cliente
 *   tags: [clientes]
 *   responses:
 *    200:
 *     description: clientes encontrados
 *     content:
 *      aplplication/json:
 *       schema:
 *        type: array
 *        items:
 *          $ref: '#/components/schemas/clientes'
 */

/**
 * @swagger
 * /v1/eliminarCliente/{id}:
 *  get:
 *   summary: eliminar cliente
 *   tags: [clientes]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: se requiere un id
 *   responses:
 *    200:
 *     description: El cliente fue eliminado
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/clientes'
 */

router.get('/listarCliente', funcionesClientes.listarCliente);
router.get('/eliminarCliente/:id', funcionesClientes.eliminarCliente);
router.post('/registrarCliente', funcionesClientes.registrarCliente);
router.post('/actualizarCliente', funcionesClientes.actualizarCliente);


module.exports = router;
