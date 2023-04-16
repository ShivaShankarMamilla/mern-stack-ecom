import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true//because mail id are unique
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    answer: {
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0
    }

},{timestamps:true})//timestamps ensures to show when the user was created

export default mongoose.model("users",userSchema)
//Next Step: Creating Routes