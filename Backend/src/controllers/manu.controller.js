const Manuitem = require("../db/models/manu.model");
const addmenu = async (req, res) => {
    const menuItem = req.body;
    if (!!menuItem) {
      if (
        (menuItem.description == "" || menuItem.price == "", menuItem.title == "")
      ) {
        res.status(400).json({
          message: "All Feild Required",
        });
      } else {
        try {
          const newManu = new Manuitem({
            description: menuItem.description,
            price: menuItem.price,
            title: menuItem.title,
            atAvailable: true,
          });
          await newManu.save();
          res.status(201).json({
            response: "new Manu add successfully",
          });
        }catch (error) {
          if (error.code === 11000 && error.keyPattern.email) {
            return res.status(409).json({ message: "Manu Item already exists" });
          }
    
          console.error("Save error:", error);
          res.status(500).json({ message: "Internal server error" });
        }
      }
    }
  };
  const getmenu=async(req,res)=>{
    try {
        const menu= await Manuitem.find().limit(3)
        console.log(menu);
        res.status(200).json({
            response:menu
        })
    } catch (error) {
        console.log(error.message);
        
    }

  }
  module.exports = {  addmenu,getmenu };