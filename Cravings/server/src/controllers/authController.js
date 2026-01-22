import User from "../models/userModel.js"
import bcrypt from 'bcrypt'
import { genToken } from "../utils/authToken.js";


export const UserRegister = async(req,res,next)=>{
    try {
        //accpet data from Frontend
         const {fullName,email,mobileNumber,password} = req.body;
          
         //verify that all data exist
         if(!fullName ||!email || !mobileNumber || !password){
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
         }
             //check for dupliacate user before registration
             const existingUser = await User.findOne({email});
             if(existingUser){
             const error =new Error("Email is already registred");
             error.statusCode = 409;
            return next(error);
             }

             //encrypt the password
             const salt = await bcrypt.genSalt(10);
             const hashPassword = await bcrypt.hash(password,salt); 
             //  const hashPassword = await bcrypt.hash(password,10); //method-2

             //save data to database
             const newUser = await User.create({
                fullName,
                email,
                mobileNumber,
                password:hashPassword,
             });

           //send response to Frontend 
           console.log(newUser);
           res.status(201).json({message:"Registration Succesfull"});

            } catch (error) {
              next(error)
        
    }
}
export const UserLogin = async(req,res,next)=>{
    try {
        //Fetch data from Frontend
        const {email,password}=req.body;

        if( !email || !password){
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
        }
        //check for dupliacate user before registration
             const existingUser = await User.findOne({email});
             if(!existingUser){
             const error =new Error("Email not Registered");
             error.statusCode = 402;
            return next(error);
             }
             
         //verify the Password 
         const isVerified = await  bcrypt.compare(password,existingUser.password);
         if(!isVerified){
            const error =new Error("password didn't match");
             error.statusCode = 402;
            return next(error);
         }

         //Token Generation will be done Here
         await genToken(existingUser,res);


         //send message to Frontend
         res.status(200).json({message:"Login Succesfull",data:existingUser});
         //end
        
    } catch (error) {
        next(error)
        
    }
}
export const UserLogout = async(req,res,next)=>{
    try {
         res.status(200).json({message:"Logout Succesfull"});
    } catch (error) {
        next(error)
        
    }
}