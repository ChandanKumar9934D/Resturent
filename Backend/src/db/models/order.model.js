const mongoose=require("mongoose")
const orderschema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'menuitem',
        required:true,
        status: { type: String, enum: ['pending', 'preparing', 'delivered', 'cancelled'], default: 'pending' },
        totalAmount: { type: Number, required: true },

    }
})
const Order =mongoose.model("Order",orderschema)
module.exports= Order