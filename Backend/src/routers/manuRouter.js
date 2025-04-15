const express=require('express')
const {addmenu,getmenu,showmenu}=require("../controllers/manu.controller")
const manuRouter=express.Router()
manuRouter.post('/addmenu',addmenu)
manuRouter.get('/menuitem',getmenu)
manuRouter.get('/showmenu',showmenu)
module.exports=manuRouter