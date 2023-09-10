const funcionesProductos = require('../controller/use-cases/use.productos');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', funcionesProductos.paginaInicioPrueva);
router.post('/registro', funcionesProductos.guardaProducto);
