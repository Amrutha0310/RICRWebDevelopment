import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from  "./pages/Contact"
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./pages/dashborads/UserDashboard";
import RiderDashboard from "./pages/dashborads/RiderDashboard";
import RestaurantDashboard from "./pages/dashborads/RestaurantDashboard";
import AdminDashboard from "./pages/dashborads/adminDashboard";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Toaster/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<UserDashboard/>}/>
          <Route path="/rider-dashboard" element={<RiderDashboard/>}/>
          <Route path="/restaurant-dashboard" element={<RestaurantDashboard/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;