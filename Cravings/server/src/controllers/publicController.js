import Contact from "../models/contactModel.js";

export const NewContact = async(req,res,next) => {
    try {

        //verify data
        const{fullName, email, mobileNumber, message} = req.body;
           if(!fullName ||!email || !mobileNumber || !message){
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
         }
         const newContact = await Contact.create({
            fullName,
            email,
            mobileNumber,
            message,
         });
        
         console.log(newContact);
         res.status(201).json({message:"Thanks for Contacting us.We will get Back to you in 24-48Hours"});

    } catch (error) {
        next(error);
        
    }
};