import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FirstOrderList from "./pages/FirstOrderList";
import Hoteldetails from "./pages/Hoteldetails";



const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = { <Home /> } />
      <Route path="/user/login" element = { <Login /> } />
      <Route path="/signup" element = { <Signup /> } />
      <Route path="/cart" element = { <Cart /> } />
      <Route path="/FirstOrder" element = { <FirstOrderList /> } />
      <Route path="/hoteldetails" element = { <Hoteldetails /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;