const employeeModel = require("../models/employeeModel.js");

const editEmployeeController = async (req, res) => {
  console.log("Backend on submit");
  try {
    const {
      id,
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      dateOfJoining,
      title,
      department,
      employeeType,
    } = req.body;
    const updatedEmployee = {
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      dateOfJoining,
      title,
      department,
      employeeType,
    };

    const result = await employeeModel.findOneAndUpdate(
      { _id: id },
      updatedEmployee,
      { new: true }
    );

    if (result) {
      res.json({ message: "Employee updated successfully" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = editEmployeeController;
