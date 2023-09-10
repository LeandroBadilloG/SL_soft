const mongoose = require('mongoose');

const uri =`mongodb+srv://${process.env.DATOS_USER}:${process.env.DATOS_CONTRA}@sl-soft.xw5bvbw.mongodb.net/${process.env.DATOS_DATA}?retryWrites=true&w=majority`;
// mongodb+srv://sl-soft:leandrosantiago@sl-soft.xw5bvbw.mongodb.net/
// mongodb+srv://sl-soft:<password>@sl-soft.xw5bvbw.mongodb.net/

mongoose.connect(uri, {useNewUrlParser: true});
module.exports = mongoose;

