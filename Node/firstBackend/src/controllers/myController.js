import User from "../models/userModel.js";

export const UserRegister = async (req, res,next) => {
  try {
    const { fullName, email, phone, password } = req.body;
    if (!fullName || !email || !phone || !password) {
    //   res.status(400).json({ message: "All Fields Required" });
    //   return;

    const error = new Error("All Fields Required");
    error.statusCode =400;
    return next(error);
    }
    const existingUser=await User.findOne({email});
    if(existingUser){
        // res.start(409).json({message:"email already exist"});
        // return;
        const error  = new Error("email already exist");
        error.statusCode = 409;
        return next(error);
    }

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });
    console.log(newUser);
    // res.status(201).json({ message: "User Created Succesfully" });
    const error= new Error("User Created Succesfully");
     error.statusCode = 201;
        return next(error);

  } catch (error) {
    console.log(error);
    // res.status(500).json({ messsage: "Internal Server Error" });
    next(error);
  }
};
export const UserLogin = async (req, res,next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
    //   res.status(400).json({ message: "All Fields Required" });
    //   return;
    const error = new Error("All Fields Required");
    error.statusCode =400;
    return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
    //   res.status(409).json({ message: "User Not Found" });
    //   return;
    const error  = new Error("email already exist");
        error.statusCode = 409;
        return next(error);
    }
    const isVerified = password === existingUser.password;
    if (!isVerified) {
    //   res.status(402).json({ message: "User Not Authorized" });
    //   return;
    const error = new Error("User Not Authorized");
    error.statusCode = 402;
    return next(error);
    }
    console.log(existingUser);
    res.status(200).json({ message: "Welcome Back", data: existingUser });
  } catch (error) {
    console.log(error);
    next(error)
    // res.status(500).json({ messsage: "Internal Server Error" });
  }
};
export const UserLogout = async (req, res,next) => {
  try {
    // res.status(200).json({ message: "Logout Succesfully" });
    const error = new Error("Logout Succesfully");
     error.statusCode = 200;
    return next(error);
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(500).json({ messsage: "Internal Server Error" });
  }
};
export const UserUpdate = async (req,res,next) =>{
    try{
       const{fullName,email,phone} = req.body;
        if (!fullName || !email || !phone ){
            const error = new Error("All Fields Required");
            error.statusCode = 400;
            return next(error);
        }
        const existingUser = await User.findOne({email});
        if(!existingUser){
            const error = new Error("User Not Found");
            error.statusCode = 404;
            return next(error);
        }
            existingUser.fullName = fullName;
            existingUser.phone = phone;
         await existingUser.save();

         res.status(200).json({message:"User Updated Succesfully",data:existingUser});
    } catch(error){
        console.log(error);
        next(error);
    }
}