const express = require('express');
const app = express();
const morgan = require('morgan');
const dotdev = require('dotenv');
const router =require('./backend/routes/rutes');

dotdev.config();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Conectado en el puerto ${PORT}`);
});
