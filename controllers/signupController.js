const userModel = require("../models/userModel.js");

const signupController = async (req, res) => {
  try {
    const userdata = {
      fullName: req.body.fullName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      userType: req.body.userType,
    };
    const check = await userModel.findOne({ email: userdata.email });

    if (check) {
      res.json("Employee Already Exists");
    } else {
      await userModel.create(userdata);
      res.json("Employee created successfully");
    }
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = signupController;
