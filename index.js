const express = require('express');
const app = express();
const morgan = require('morgan');

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views/pages'));

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'tienda virtual sl-soft',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:6600',
      },
    ],
  },
  apis: [`${__dirname}/backend/routes/*.js`],
};

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
app.use(express.urlencoded({extended: true}));

const rutas = require('./backend/routes/rutas');
app.use('/v1', rutas);

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Conectado en el puerto ${PORT}`);
});
