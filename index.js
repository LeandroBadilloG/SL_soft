const express = require('express');
const app = express();
const morgan = require('morgan');

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views/pages'));

const dotdev = require('dotenv');
dotdev.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));

const router = require('./backend/routes/rutes');
app.use('/', router);

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Conectado en el puerto ${PORT}`);
});
