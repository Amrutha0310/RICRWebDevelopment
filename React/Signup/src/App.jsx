import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Course";
import Contact from "./pages/Contact";
import EnquiryForm from "./pages/EnquiryForm";
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <BrowserRouter>
      <Toaster/>
      <Header />

      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
      </Routes>

      
      <Footer />
    </BrowserRouter>
  );
};

export default App;
