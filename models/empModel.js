const mongoose=require("mongoose")

const empSchema=mongoose.Schema({

    firstName:{
        type:String,required:[true,"FirstName is required"]
    },
    lastName:{
        type:String,required:[true,"lastName is required"]
    },
    email:{
        type:String,required:[true,"email is required"]
    },
    dob:{
        type:String,required:[true,"dob is required"]
    },
    gender:{
        type:String,required:[true,"gender is required"]
    },
    education:{
        type:String,required:[true,"education is required"]
    },
    company:{
        type:String,required:[true,"company is required"]
    },
    experience:{
        type:String,required:[true,"experience is required"]
    },
    package:{
        type:String,required:[true,"package is required"]
    },
    

})
module.exports=mongoose.model("employees",empSchema)