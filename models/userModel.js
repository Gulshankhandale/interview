import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },

    message:{
        type:String,
        required:true,
    },



    
})

const userModel = mongoose.model('userModel',userSchema);

export default userModel;

