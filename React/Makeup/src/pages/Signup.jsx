import React from "react";
import { useState } from "react";

const Signup = () => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const [contactData, setContactData] = useState({
    userName: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    city: "",
    gender: "",
    religion: "",
    skill: [],
  });

  const [isloading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = contactData.skill;
      if (checked) {
        //for checkbox
        temp.push(value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp.Object.values(temp); //Convert to Array
        temp = temp.filter((word) => word !== value); //Remove the Undersired Value
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    }
  };
  const handleClearForm = () => {
    setContactData({
      userName: "",
      email: "",
      password: "",
      dob: "",
      phone: "",
      city: "",
      gender: "",
      religion: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // this will not show data on url
    setIsLoading(true);
    try {
      console.log(contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center  ">
        <h1 className="text-4xl">Login</h1>
        <div>
          <section className="border w-2xl">
            <form onReset={handleClearForm} onSubmit={handleSubmit}>
              <div className="p-2  flex  justify-center items-center gap-2">
                <label htmlFor="userName:">UserName</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={contactData.userName}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="text-pink-400 rounded"
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
                  className="text-pink-400 rounded"
                  required
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
                  className="text-pink-400 rounded"
                  required
                />
              </div>
              <div className="p-2">
                <label htmlFor="dob">DOB:</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={contactData.dob}
                  onChange={handleChange}
                  placeholder="Enter your dob"
                  className="text-pink-400 rounded"
                  required
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
                  className="text-pink-400 rounded"
                  required
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
                  className="text-pink-400 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="religion">Religion</label>
                <select
                  name="religion"
                  id="religion"
                  onChange={handleChange}
                  value={contactData.religion}
                >
                  <option value="">--Select Religion--</option>
                  <option value="islam">Islam</option>
                  <option value="hinduism">Hinduism</option>
                  <option value="christianity">Christianity</option>
                  <option value="buddhism">Buddhism</option>
                  <option value="jainism">Jainism</option>
                  <option value="sikhism">Sikhism</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={contactData.gender === "male"}
                />{" "}
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={contactData.gender === "female"}
                />{" "}
                Female
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={handleChange}
                  checked={contactData.gender === "other"} //to clear form as soon as we clear it(radio)
                />{" "}
                Other
              </div>
              <div>
                <label htmlFor="skill">Skill known</label>
                <input
                  type="checkbox"
                  name="skill"
                  value="html"
                  onChange={handleChange}
                  checked={
                    Object.values(contactData.skill).find(
                      (word) => word === "html"
                    )
                      ? true
                      : false
                  }
                />{" "}
                HTML
                <input
                  type="checkbox"
                  name="skill"
                  value="css"
                  onChange={handleChange}
                  checked={
                    Object.values(contactData.skill).find(
                      (word) => word === "css"
                    )
                      ? true
                      : false
                  }
                />{" "}
                CSS
                <input
                  type="checkbox"
                  name="skill"
                  value="js"
                  onChange={handleChange}
                  checked={
                    Object.values(contactData.skill).find(
                      (word) => word === "js"
                    )
                      ? true
                      : false
                  }
                />{" "}
                JS
                <input
                  type="checkbox"
                  name="skill"
                  value="react"
                  onChange={handleChange}
                  checked={Object.values(contactData.skill).includes("react")}
                />{" "}
                React
              </div>
              <div className="p-2 gap-3 flex justify-center items-center">
                <button
                  type="reset"
                  className="rounded-xl border-2 bg-red-500 text-amber-50"
                >
                  Clear Form
                </button>
                <button
                  type="Submit"
                  className="rounded-xl border-2 bg-green-700 text-amber-50"
                >
                  {isloading ? "Loading" : "Submit"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Signup;
