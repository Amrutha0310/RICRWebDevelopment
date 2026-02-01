 import React from 'react'
 import {useState} from "react";
 import { BsArrowClockwise } from "react-icons/bs";
import api from "../../config/Api";
import toast from "react-hot-toast";

 
 const ForgetPasswordModal = ({onClose}) => {
     const [formData, setFormData] = useState({
      email:"",
      otp:"",
      newPassword:"",
      cfnewPassword:"",
     });
      
      const [loading, setLoading]=useState(false);
      const [isOtpSent, setIsOtpSent] = useState(false);
      const [isOtpVerified, setIsOtpVerified] = useState(false);
      const handleSubmit = async (e) => {
      e.preventDefault();
       setLoading(true);
       try {
           console.log(formData);
           let res;
           if(isOtpSent){
            if(isOtpVerified){
               res =await api.post("auth/forgetPassword", formData);
               toast.success(res.data.message);
              onClose();
            }  else {
              res= await api.post("/auth/verifyOtp", formData);
          toast.success(res.data.message);
          setIsOtpSent(true);
          setIsOtpVerified(true);
            }
           }  else {
             res = await api.post("auth/genOtp", formData);
            toast.success(res.data.message);
             setIsOtpSent(true);
           }
           
       } catch (error) {
        
       }






   return (
     
   )
 }
 
 export default ForgetPasswordModal