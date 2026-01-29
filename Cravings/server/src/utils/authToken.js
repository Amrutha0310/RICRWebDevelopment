import jwt from "jsonwebtoken";

export const genToken = async (user, res) => {
  try {
    const payload = {
      id: user._id,
      role: user.role || "admin",
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    }); //1h,
    console.log(token);


    res.cookie("parleG", token, {
      //frontend->cookies
      maxAge: 1000 * 60 * 60 * 24, //milliseconds value
      httpOnly: true, //who all can use =>security purpose
      secure: false,
      sameSite: "lax", // sepcial-mode=>through which we can use in thunderclient
    });
  } catch (error) {
    throw error;
  }
};
