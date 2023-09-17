const express = require('express');
const app = express();
const morgan = require('morgan');

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views/pages'));

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));

const rutasProductos = require('./backend/routes/rutas.productos');
app.use('/v1/productos', rutasProductos);

const rutasEmpleados = require('./backend/routes/rutas.empleados');
app.use('/v1/empleados', rutasEmpleados);

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Conectado en el puerto ${PORT}`);
});
