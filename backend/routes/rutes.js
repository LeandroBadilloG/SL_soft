const funcionesProductos = require('../controller/usecases/controller.productos');

const express = require('express');
const router = express.router();

router.get('/', funcionesProductos.registrarProductos);
