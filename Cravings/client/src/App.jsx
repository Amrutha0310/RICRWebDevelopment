import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from  "./pages/Home";
import Contact from  "./pages/Contact";
import About from  "./pages/about";
import Login from  './pages/Login';
import Register from './pages/Register';



const App = () =>{
  return(
   <>
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path ="/" element={<Home/>}></Route>
    <Route path ="/contact" element={<Contact/>}></Route>
    <Route path ="/about" element={<About/>}></Route>
    <Route path ="/login" element={<Login/>}></Route>
    <Route path ="/register" element={<Register/>}></Route>

   </Routes>
   </BrowserRouter>
  
   
   </>
  )
}
export default App