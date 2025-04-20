const Order = require("../db/models/order.model");
// const Order = require("../db/models/order.model");

const order = async (req, res) => {
  try {
    const order = req.body;
    if (order.name == "" || order.price == "" || order.quntity == "") {
      res.status(400).json({
        message: "All fields are Required",
      });
    } else {
      const result = new Order({
        totalAmount: order.price,
        status: "pending",
        order: order.productId,
        user: order.userId,
      });
      await result.save();
      res.status(201).json({
        message: " Your Order Placed Sccessfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal error!!!!!!',
    });
  }
};
const getOrder=async(req,res)=>{
  const order=await Order.find()
  console.log(order);
  res.status(200).json({
    message:order
  })
  
}
module.exports = { order,getOrder };
