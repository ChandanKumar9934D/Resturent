const express=require('express')
const userRoute=express.Router()
const register=require("../controllers/userControler")
userRoute.post('/register',register)
module.exports=userRoute