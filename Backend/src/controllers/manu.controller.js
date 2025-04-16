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
      } catch (error) {
        if (error.code === 11000 && error.keyPattern.email) {
          return res.status(409).json({ message: "Manu Item already exists" });
        }

        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
};
const getmenu = async (req, res) => {
  try {
    const menu = await Manuitem.find().limit(3);
    res.status(200).json({
      response: menu,
    });
  } catch (error) {}
};
const showmenu = async (req, res) => {
  try {
    const menu = await Manuitem.find();
    res.status(200).json({
      response: menu,
    });
  } catch (error) {}
};
const findmenu = async (req, res) => {
  const productId = req.params.productId;
  if (!productId) {
    return res.status(404).json({ message: "Product not found" });
  } else {
    try {
      const menu = await Manuitem.findById(productId);
      res.status(200).json({
        response: menu,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching product", error });
    }
  }
};
module.exports = { addmenu, getmenu, showmenu, findmenu };
