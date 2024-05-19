const userModel = require("../models/userModel.js");
const employeeModel = require("../models/employeeModel.js");

const signupController = async (req, res) => {
  try {
    const isEmployee = await employeeModel.findOne({ email: req.body.email });
    if(isEmployee){
      console.log(isEmployee)
      const check = await userModel.findOne({ email: req.body.email });
      if (check) {
        res.json("Employee Already Exists");
      } else {
         let empPhoneNumber=isEmployee.phoneNumber;
         if(isEmployee.phoneNumber !== empPhoneNumber){
            res.json("Please enter the Phone Number you gave to the Employer");
         }
         else{
          const userdata = {
            fullName: req.body.fullName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
            userType: req.body.userType,
            employeeId:isEmployee.employeeId
          };
          console.log(userdata)
          await userModel.create(userdata);
          res.json("Employee created successfully");
         }
       
      }
    }
    else{
      res.json("No Employee found");
    }
   
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = signupController;
