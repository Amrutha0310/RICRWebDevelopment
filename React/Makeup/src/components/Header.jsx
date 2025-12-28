import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBox, FaPhone } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className="bg-pink-300 text-white px-6 py-4   p-4 justify-between  flex items-center ">
        <h2  className="text-xl font-bold">GlowMore</h2>
        <div className="flex  gap-4 ">
          
          <Link to={"/"} className="flex hover:text-blue-300 items-center gap-1">
          <FaHome className="text-lg" />
            Home
          </Link>
          <Link to={"/about"} className="flex  hover:text-blue-300 items-center gap-1">
          <FaInfoCircle className="text-lg" />
            About
          </Link>
          <Link to={"/product"} className="flex  hover:text-blue-300 items-center gap-1">
           <FaBox className="text-lg" />
            Product
          </Link>
          <Link to={"/contact"} className="flex  hover:text-blue-300 items-center gap-1">
           <FaPhone className="text-lg" />
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
