const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Conectado en el puerto ${PORT}`);
});
