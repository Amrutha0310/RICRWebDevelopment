 import mongoose from "mongoose";


  const otpSchema = mongoose.Schema({
    email:{
         type:String,
         required :true,
    },
    otp:{
         type:String,
         required :true,
    },
     createAt:{    /// create manually reather than use of time stamps
          type: Date,
    default: Date.now,
    expires: 300, // 5 minutes
  },

  });
   const OTP =mongoose.model('OTP',otpSchema);
   export default OTP;
