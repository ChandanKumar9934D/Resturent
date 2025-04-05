const mongoose=require("mongoose")
const orderschema=mongoose.Schema({
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'menuitem'
    }
})