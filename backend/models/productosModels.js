const mongoose = require('../config/config');
const shemnaProductos =new mongoose.shema({

    nombreProducto:{
        type:String,
        require:true,        
    },
    tallaProducto:{
        type:String,
        require:true,
    },
    referenciaProducto:{
        type:String,
        requiere:true,
    },
    cantidadProducto:{
        type:String,
        require:true,
    },
    precioProducto:{
        type:Number,
        requiere:true,
    },
    descripcionProducto:{
        type:String,
        requiere:true,
    },

        
    timestamps: true

});

const productosModels = mongoose.model('Factura', shemnaProductos);

module.exports=productosModels;