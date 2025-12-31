import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        
        <h1 className="text-2xl font-bold text-blue-700">
          RICR
        </h1>

        
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/home" className="hover:text-blue-600">Home</Link>
          <Link to="/courses" className="hover:text-blue-600">Courses</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/enquiry" className="hover:text-blue-600">Enquiry</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
