 import mongoose from 'mongooose';
   

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
         type:Date,
         required :true,
         expires: 300,
    },
  });
   const OTP =mongoose.model('OTP',otpSchema);
   export default OTP;
