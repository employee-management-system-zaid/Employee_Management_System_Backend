const userModel = require("../models/userModel.js");

const checkingAuthenticationController = async (req, res) => {
  try {
    if (req.session.userId) {
      const user = await userModel.findById(req.session.userId);
      if (user) {
        return res.json({ message: "User is Authenticated", user });
      } else {
        return res.json({ message: "User not found. Authentication failed." });
      }
    } else {
      return res.json({ message: "User is not Authenticated" });
    }
  } catch (error) {
    // If an error occurs during database operation, send an error response
    console.error("Authentication error:", error);
    return res
      .status(500)
      .json({ message: "Internal server error. Authentication failed." });
  }
};

module.exports = checkingAuthenticationController;
