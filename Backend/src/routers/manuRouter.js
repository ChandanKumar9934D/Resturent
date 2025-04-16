const express=require('express')
const {addmenu,getmenu,showmenu, findmenu}=require("../controllers/manu.controller")
const manuRouter=express.Router()
manuRouter.post('/addmenu',addmenu)
manuRouter.get('/menuitem',getmenu)
manuRouter.get('/showmenu',showmenu)
manuRouter.get('/findmenu/:productId',findmenu)
module.exports=manuRouter