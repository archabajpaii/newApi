const express=require("express")
const {
    
    registerAdmin,
    adminLogin,
    currentAdmin
}= require("../controllers/adminController")
const router=express.Router()

router.post("/register",registerAdmin);
router.post("/login",adminLogin);
router.get("/current",currentAdmin);

// router.post("/current",(req,res)=>{
//     res.json({message: "current user"})
// });


module.exports=router