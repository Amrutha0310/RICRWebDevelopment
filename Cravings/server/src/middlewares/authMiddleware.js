import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const Protect = async (req, res, next) => {
  try {
    const biscuit = req.cookies.parleG;
    console.log("Token recieved in Cookies:", biscuit);

    const tea = jwt.verify(biscuit, process.env.JWT_SECRET); // JWT=>Verify
    console.log(tea);
    if (!tea) {
      const error = new Error("Unauthorized Please Login Again");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedUser = await User.findById(tea.id); //decrypt  // mongodb operation
    if (!verifiedUser) {
      const error = new Error("Unauthorized Please Login Again");
      error.statusCode = 401;
      return next(error);
    }

    req.user = verifiedUser;
    next();
  } catch (error) {
    next(error);
  }
};
