const express=require('express')
const userRoute=express.Router()
const {register,login}=require("../controllers/userControler")
userRoute.post('/register',register)
userRoute.post('/login',login)
module.exports=userRoute