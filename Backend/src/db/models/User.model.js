const mongoose = require("mongoose");
const bcrypt =require("bcrypt")
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    userType:{
      type:Number,
      required:true,
      default:1
    }
  },
  { timestamps: true }
);
userSchema.pre("save",async function(next){
  if(!this.isModified('password')) return next()
    this.password=await bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.isPasswordCorrect=async function(password){
  return await bcrypt.compare(password,this.password)
}
const User = mongoose.model("User", userSchema);
module.exports = User;
