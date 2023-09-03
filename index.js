const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
// const path = require('path');
// eslint-disable-next-line new-cap
// const router = express.Router();

// app.use('/', router);

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Conectado en el puerto ${PORT}`);
});
