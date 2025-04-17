const express=require("express")
const { order } = require("../controllers/order.controller")
const orderRouter=express.Router()
orderRouter.post("/order",order)
module.exports=orderRouter