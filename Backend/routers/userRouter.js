const express=require('express')
const userRoute=express.Router()
const register=require("../controler/userControler")
userRoute.post('/register',register)
module.exports=userRoute