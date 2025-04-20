const express=require("express")
const { order, getOrder } = require("../controllers/order.controller")
const orderRouter=express.Router()
orderRouter.post("/order",order)
orderRouter.get("/getOrder",getOrder)
module.exports=orderRouter