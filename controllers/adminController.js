const asyncHandler=require("express-async-handler")
const Admin=require("../models/adminModel")
const bcrypt=require("bcrypt")

const registerAdmin=asyncHandler(async(req,res)=>{
    
   
    const {name, email, password } = req.body;
    const userAvailable=await Admin.findOne({email})
    if(userAvailable){
        res.status(404);
        throw new Error("User already exists")
    }

    const hashedPassword=await bcrypt.hash(password,10)
    console.log(hashedPassword)

    await Admin.create({name,email,password})  
    res.json({message:"Registered the user"})
});

const adminLogin=asyncHandler(async(req,res)=>{
    const { email, password } = req.body;

 
    if (!email || !password) {
        res.status(400);
        throw new Error('Please provide both email and password');
    }

    
    const admin = await Admin.findOne({ email });

    if (admin && admin.password === password) {
       
        res.json({
            message: "User is logged in",
            userDetails: {
               
                name: admin.name,
                email: admin.email,
            }
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

const currentAdmin=asyncHandler(async(req,res)=>{

})



module.exports={registerAdmin, adminLogin,currentAdmin}