const mongoose=require('mongoose')
const registerSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    },

},{timestamps :true })
export const registerModel=mongoose.model('User',registerSchema)