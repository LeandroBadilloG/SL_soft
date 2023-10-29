const express = require('express');
const app = express();
const morgan = require('morgan');

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views/pages'));

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./openapi3_0.json');

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const rutas = require('./backend/routes/rutas');
app.use('/v1', rutas);

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Conectado en el puerto ${PORT}`);
});
