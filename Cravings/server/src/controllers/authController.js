import User from "../models/userModel.js"
import bcrypt from "bcrypt";
import { genToken } from "../utils/authToken.js";


export const UserRegister = async(req,res,next)=>{
    try {
       
         console.log(req.body);
          //accept data from Frontend
         const {fullName,email,mobileNumber,password,role} = req.body;
          
         //verify that all data exist
         if(!fullName ||!email || !mobileNumber || !password || !role){
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
         }
            console.log({ fullName, email, mobileNumber, password });

             //check for duplicate user before registration
             const existingUser = await User.findOne({email});
             if(existingUser){
             const error =new Error("Email is already registred");
             error.statusCode = 409;
            return next(error);
             }

              console.log("Sending Data to DB");

             //encrypt the password
             const salt = await bcrypt.genSalt(10);
             const hashPassword = await bcrypt.hash(password,salt); 
             //  const hashPassword = await bcrypt.hash(password,10); //method-2

             console.log("Password Hashing Done. hashPassword = ", hashPassword);
             
             
              const photoURL = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
            const photo = {
              url: photoURL,
             };
             
             
             //save data to database
             const newUser = await User.create({
                fullName,
                email,
                mobileNumber,
                password:hashPassword,
                 role,
                 photo,
             });

           //send response to Frontend 
           console.log(newUser);
           res.status(201).json({message:"Registration Succesfull"});
             //End
            } catch (error) {
              next(error);
        
    }
};
export const UserLogin = async(req,res,next)=>{
    try {
        //Fetch data from Frontend
        const {email,password}=req.body;

         //verify that all data exist
        if( !email || !password){
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
        }
        //check for dupliacate user before registration     //=>Check if user is registred or not
             const existingUser = await User.findOne({email});
             if(!existingUser){
             const error =new Error("Email not Registered");
             error.statusCode = 401;
            return next(error);
             }
             
         //verify the Password 
         const isVerified = await  bcrypt.compare(password,existingUser.password);
         if(!isVerified){
            const error =new Error("password didn't match");
             error.statusCode = 401;
            return next(error);
         }

         //Token Generation will be done Here
         await genToken(existingUser,res);


         //send message to Frontend
         res.status(200).json({message:"Login Succesfull", data:existingUser});
         //end
        
    } catch (error) {
        next(error);
        
    }
}
export const UserLogout = async(req,res,next)=>{
    try {
        res.clearCookie("parleG")
         res.status(200).json({message:"Logout Successfull"});
    } catch (error) {
        next(error);
        
    }
}