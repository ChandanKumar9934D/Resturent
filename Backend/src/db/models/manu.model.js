const mongoose=require('mongoose')
const manuSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        lowecase:true,
    },
    price:{
        type:Number,
        required:true,
    },
    atAvailable:{
        type:Boolean,
        required:true,
        default:true
    },
    description:
     { type: String },
},{timestamps:true}) 
 const Manuitem=mongoose.model('Manuitem',manuSchema)
 module.exports=Manuitem