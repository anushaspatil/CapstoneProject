import React from "react";
import FoodLogo from "../assets/FoodLogo_1.jpg";
// import {BsSearch} from "react-icons/Bs";
import HotelLogo from "../assets/Hotel3.jpg" ;
import { Link } from "react-router-dom";
import { BsBasket3Fill } from "react-icons/Bs";


const Navbar = ()=>{
return(
<div className="container w-full">

<div className="flex  items-center">
  <img className="w-28 rounded-full mr-28 ml-8" src={HotelLogo} />
  
<div className=" flex flex-row h-16 border-4 gap-2 border-orange-600 rounded-lg shadow-lg mt-4">
<select name="Location" id="Location" className="w-48 text-center text-black text-md">
    <option value="currentLocation">Mejestic,Banglore</option>
</select>
<h1 className="border-2 border-orange-400 mt-2 mb-2"></h1>
<div className="search w-[40rem] mt-3">
    <input type="text" className="w-full focus:outline-none text-xl text-center" placeholder="search for restaurant, cuisine or a dish" />
</div>
</div>

<div className="flex gap-6 mt-3 ml-12">
  <Link to={"/user/login"} target="blank"><button  className="p-2 text-white rounded-md font-semibold bg-orange-500">Log in</button></Link>
 <Link to={"/signup"} target="blank"><button className="p-2 text-white font-semibold rounded-md bg-orange-500">Sign up</button></Link> 
</div>
<Link to={"/cart"} className="ml-16 mt-2 scale-150"> <BsBasket3Fill /> </Link> 

</div>


</div>
  )
}

export default Navbar;