const funcionesEmpleados= require('../controller/use-cases/use.empleados');
const express= require('express');
// eslint-disable-next-line new-cap
const router= express.Router();

router.get('/listar', funcionesEmpleados.listarEmpleado);
router.get('/eliminar', funcionesEmpleados.eliminarEmpleado);
router.post('/registrar',funcionesEmpleados.guardarEmpleado);
router.post('/actualizar', funcionesEmpleados.actualizarEmpleado);

module.exports = router;
