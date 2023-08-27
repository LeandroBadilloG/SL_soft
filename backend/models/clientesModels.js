const mongoose = require('../config/config');
const shemnaClientes =new mongoose.shema({

    nombreCliente:{
        type:String,
        require:true,        
    },
    apellidoCliente:{
        type:String,
        require:true,
    },
    documentoCliente:{
        type:String,
        require:true,
    },
    celularCliente:{
        type:String,
        default:'Sin registrar numero celular'
    },
    emailCliente:{
        type:String,
        require:true,
    },
    direccionCliente:{
        type:String,
        default:'Sin registrar direccion'
    },
    passwordCliente:{
        type:String,
        requiere:true,
    },
    rol:{
        type: String,
        default:'Cliente'
    },
        
    timestamps: true

});

const clientesModels = mongoose.model('Factura', shemnaClientes);

module.exports=clientesModels;