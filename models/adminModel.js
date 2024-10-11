const mongoose=require("mongoose")

const adminSchema=mongoose.Schema({

    name:{
        type:String,unique:true,required:[true,"Name is required"]
    },
    email:{
        type:String,unique:true,required:[true,"Email is required"]
    },
    password:{
        type:String,required:[true,"Password is required"]
    }


});
module.exports=mongoose.model("admin",adminSchema)