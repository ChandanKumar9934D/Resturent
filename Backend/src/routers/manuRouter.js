const express=require('express')
const {addmenu,getmenu}=require("../controllers/manu.controller")
const manuRouter=express.Router()
manuRouter.post('/addmenu',addmenu)
manuRouter.get('/menuitem',getmenu)
module.exports=manuRouter