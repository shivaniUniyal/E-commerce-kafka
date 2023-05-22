const mongoose = require('mongoose');

const product =mongoose.Schema({
    product_title:{
        type:String,
        unique:true,
        required:[true ,"Product title is required."]
    },
    description:{
        type:String,
        required:[true ,"Product description is required."]
    },
    price:{
        type:Number,
        required:[true ,"Product price is required."]
    },
    image:{
        type:String,
        required:[true ,"Product image is required."]
    },
    quantity:{
        type:Number,
        required:[true, "Quantity is required."]
    }
},{
    timestamps:true,
    versionKey:false
});

module.exports = product;