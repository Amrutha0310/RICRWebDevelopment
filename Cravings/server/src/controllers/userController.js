import User from "../models/userModel.js"
import cloudinary from "./"

export const UserUpdate = async (req, res, next) => {
  try {
    //logic here
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All Fields are Mandatory");
      error.statusCode = 400;
       return next(error);
    }
     console.log("Old Data", currentUser); // old user data in JSON Format
        //First Way
    //    currentUser.fullName = fullName;
    //    currentUser.email = email;
    //    currentUser.mobileNumber = mobileNumber;
    //    await currentUser.save();
    //    console.log("NewData:", currentUser);

    //Second Way
     const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullName,
        email,
        mobileNumber,
      },
      { new: true },
    );

    console.log("Updated User: ", updatedUser);
    res
      .status(200)
      .json({ message: "User Updated Sucessfully", data: updatedUser });
  
      
    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};




 export const UserChangePhoto = async (req,res,next)=>{
  const currentUser

 }
 if(currentUser.photo.publicID){
  await cloudinary
 }
  const b64 = Buffer.from(dp.buffer).toString("base64");
  console.log(b64.slice(0,100));
  const dataURI =`data:${dp.mimtype};base64,${b64}`;
  console.log("DataURI",dataURI.slice(0,100));

  const result = await cloudinary.uploader.upload(dataURI,{
    folder:"Cravings/User",
    height:500,
    width:500,
    crop:"fill",
  })
 )