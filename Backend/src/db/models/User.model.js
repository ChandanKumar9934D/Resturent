const mongoose = require("mongoose");
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
const User = mongoose.model("User", userSchema);
module.exports = User;
