import users from "../models/userModel.js"
import {comparePassword, hashPassword} from "../helpers/authHelper.js"
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken" //used in login route

//Here we will be getting user data from req.body in the form of usermodel we created for mongodb data
export const registerController = async(req,res) => {
    try{
        const {name,email,password,phone,address,answer} = req.body
        //validating the data
        if(!name){
            return res.send({message:"Name is required"})
        }
        if(!email){
            return res.send({message:"Email is required"})
        }
        if(!password){
            return res.send({message:"Password is required"})
        }
        if(!phone){
            return res.send({message:"Phone Number is required"})
        }
        if(!address){
            return res.send({message:"Address is required"})
        }
        if(!answer){
            return res.send({message:"Answer is required"})
        }


        //checking if user already exists
        const existingUser = await users.findOne({email})

        //existing user
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:"Already Registered Please Login"
            })
        }

        //if not a registered user, register him
        const hashedPassword = await hashPassword(password)
        //saving new user in database
        const user = await new userModel({name,email,phone,address,password:hashedPassword,answer}).save()
        res.status(201).send({
            success:true,
            message: "User Registered Successfully",
            user,

        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in registration",
            error

        })

    }
};

export const loginController = async(req,res) =>{
    try{
        //getting details from user
        const {email,password} = req.body

        //validating the data
        if(!email||!password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        //checking whether user in database or not
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered"
            })
        }
        //now we will check the password whether it is valid or not
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }

        //creating token if password matches
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})
        res.status(200).send({
            success:true,
            message:"login successful",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role

            },
            token
        })


    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Login",
            error //this is the error object we are sending it as it is
        })
    }

}

//forgotPassword Controller
export const forgotPasswordController = async(req,res) => {
    try{
        const {email,answer,newPassword} = req.body
        if(!email){
            res.status(400).send({message:"Email is required"})
        }
        if(!answer){
            res.status(400).send({message:"answer is required"})
        }
        if(!newPassword){
            res.status(400).send({message:"New Password is required"})
        }

        //cheching if user in database
        const user = await userModel.findOne({email,answer})
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Wrong Email or Answer"
            })
        }
        const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id,{password:hashed});
        res.status(200).send({
            success:true,
            message:"Password Reset Successfully",
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
    }
}

export const testController = (req,res)=>{
    console.log("Protected Route")
    res.send("Protected Route")
}
//first we will create helper for auth with two functions for hashing and comparing
//Next step adding the route with this controller in server.js file
