const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,required:[true,"Name is required"],
    },
    age:{
        type:Number,required:[true,"Age is required"]
    }


    

})
module.exports=mongoose.model("User",userSchema)