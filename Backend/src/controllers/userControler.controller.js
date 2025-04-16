const User = require("../db/models/User.model");

const register = async (req, res) => {
  if (
    req.body.userName == "" ||
    req.body.password == "" ||
    req.body.email == ""
  ) {
    res.status(400).json({
      response: "enter data fully",
    });
  } else {
    const data = req.body;
    try {
      const userRegister = new User({
        userName: data.userName,
        email: data.email,
        password: data.password,
        address: data.address,
        contact: data.contact,
      });
      const result=await userRegister.save();
      // console.log(result);
      
      res.status(201).json({
        response: "user registered  successfully",
        user:result._id
      });
    } catch (error) {
      if (error.code === 11000 && error.keyPattern.email) {
        return res.status(409).json({ response: "Email already exists" });
      }

      console.error("Save error:", error);
      res.status(500).json({ response: "Internal server error" });
    }
  }
};
const login = async (req, res) => {
  if (req.body.email == "" || req.body.password == "") {
    res.status(400).json({ message: "Email/Password Required" });
  } else {
    try {
      const myUser = await User.findOne({ email: req.body.email });
      if (!!myUser) {
        if (myUser.password == req.body.password) {
          res
            .status(200)
            .json({ message: `Hello ${myUser.userName}`, data: myUser });
        } else {
          res.status(404).json({ message: "wrong Email/Password" });
        }
      } else {
        res.status(404).json({ message: "user not found" });
      }
    } catch (error) {
      res.status(500).json({
        message: "server failed",
      });
    }
  }
};

module.exports = { register, login };
