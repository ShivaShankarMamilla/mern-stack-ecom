import express from "express";
import {registerController} from "../controllers/authController.js";
import { loginController } from "../controllers/authController.js";
import { testController } from "../controllers/authController.js";
import { forgotPasswordController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
//router object
const router = express.Router()

//routing

//register
router.post("/register", registerController)//instead of callback we are using controllers in other file

//login
router.post("/login",loginController)

//Forgot Password || POST
router.post('/forgot-password',forgotPasswordController)

//testing protected route
router.get("/test",requireSignIn,isAdmin, testController)

//Protected Route..only when this route satisfies then only dashboard seen
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})

//Protected Route..only admin can acccess
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})
export default router;