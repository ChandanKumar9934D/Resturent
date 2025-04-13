const express=require('express')
const userRoute=express.Router()
const {register,login,addmenu}=require("../controllers/userControler")
userRoute.post('/register',register)
userRoute.post('/login',login)
userRoute.post('/addmenu',addmenu)
module.exports=userRoute