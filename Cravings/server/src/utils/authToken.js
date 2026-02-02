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
      sameSite: "lax", // sepcial-mode=>through which we can use in thunderclient   //security  setting
    });
  } catch (error) {
    throw error;
  }
};
export const genOtpToken = (user, res) => {
  try {
    const payload = {
      id: user._id,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    console.log(token);

    res.cookie("otpToken", token, {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
  } catch (error) {
    throw error;
  }
};