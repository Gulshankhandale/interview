import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },

    message:{
        type:String,
        required:true,
    }
})

const product = mongoose.model('products', productSchema);

export default product;