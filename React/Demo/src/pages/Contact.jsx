import React from "react";
import { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isloading , setIsLoading] = useState(false);

  const handleClearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // this will not show data on url
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = {
        fullName,
        email,
        message,
      };
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };
  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>
        <div>
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div className="p-2">
              <label htmlFor="FullName">FullName</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Enter your name"
                className="rounded bg-amber-200" required
              />
            </div>
            <div className="p-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your Email"
                className="text-pink-400 rounded"  required
              />
            </div>
            <div className="p-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Any Msg"
                className="text-pink-400 rounded" required
              ></textarea>
            </div>
            <div className="p-2 gap-1">
              <button type="reset" className="rounded">
                Clear Form
              </button>
              <button type="Submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
