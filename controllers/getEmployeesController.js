const employeeModel = require("../models/employeeModel.js");

const getEmployeesController = async (req, res) => {
  try {
    let employees = await employeeModel.find();
    if (employees.length <=0) {
      return res.json({ message: "No Employees" });
    } else {
      return res.json({ message: "Successfull", employees });
    }
  } catch (error) {
    console.error("Error getting note:", error);
    return res.status(500).json({ message: "Error getting note" });
  }
};

module.exports = getEmployeesController;
