import React from 'react'
import { useState } from "react";

const Contact = () => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
   const Contact = () => {
    const [contactData, setContactData]= useState({
      userName:"",
      email:"",
      password: "",
      dob: "",
      phone:"",
      city:"",
    });
   }

    const [isloading , setIsLoading] = useState(false);
    
        


   const handleChange = (e) => {
    const {name, value} =e.target;
     setContactData((previousData) => ({ ...previousData, [name]: value }));
  };
  // const handleClearForm = () => {
  //   userName:"",
  //     email:"",
  //     password,
  //     dob,
  //     phone,
  //     city,
    
  // };

    const handleSubmit = async (e) => {
    e.preventDefault(); // this will not show data on url
    setIsLoading(true);
    try {
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();



const Login = () => {
  return (
    <>
     <div className="text-center border ">
        <h2>Login</h2>
        <div>
          <form action="">
            <div className="p-2">
              <label htmlFor="userName">UserName</label>
              <input type="text"
              name="userName"
              id="userName" 
              value={contactData.userName}
              onChange={handleChange}
              placeholder="Enter Your Name"
              />
            </div>
             <div className="p-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="text-pink-400 rounded"  required
              />
            </div>
            <div className="p-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={contactData.password}
                onChange={handleChange}
                placeholder="create Password"
                className="text-pink-400 rounded"  required
              />
            </div>
            <div className="p-2">
              <label htmlFor="dob">DOB:</label>
              <input
                type="dob"
                name="dob"
                id="dob"
                value={contactData.dob}
                onChange={handleChange}
                placeholder="Enter your dob"
                className="text-pink-400 rounded"  required
              />
            </div>
              <div className="p-2">
              <label htmlFor="phone">Phone:</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="text-pink-400 rounded"  required
              />
            </div>
            <div className="p-2">
              <label htmlFor="city">City:</label>
              <input
                type="city"
                name="city"
                id="city"
                value={contactData.city}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="text-pink-400 rounded"  required
              />
            </div>
             <div className="p-2 gap-1">
              <button type="reset" className="rounded">
                Clear Form
              </button>
              <button type="Submit">{isloading?"Loading":"Submit"}</button>
            </div>
          </form>
        </div>
    </div>
  
    </>
};

  
  
export default Login