const mongoose = require('../config/config');
const shemaFactura =new mongoose.shema({
    cliente:{
        type: String,
        require:true,
    },
    iva:{
        type:Number,
        default:'Sin IVA',
    },
    nuemeroFactura:{
        type:Number,
        require:true,           
    },
    metodoPago:{
        type:String,
        require:true
    },
    timestamps: true
});

const facturaModels = mongoose.model('Factura', shemaFactura);

module.exports=facturaModels;