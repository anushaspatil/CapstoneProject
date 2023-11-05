import React from "react";
import HotelLogo from "../assets/Hotel3.jpg";
import { RiLoginCircleFill } from "react-icons/Ri";
import { SiFacebook } from "react-icons/si";
import { PiInstagramLogoFill } from "react-icons/Pi";
import { AiFillTwitterCircle } from "react-icons/Ai";
import { AiFillLinkedin } from "react-icons/Ai";
import { BsYoutube } from "react-icons/Bs"



const Footer = ()=>{
  return(
    <div>
      <div className="h-80 bg-orange-600 w-full">
        <div className="grid grid-cols-4">

          <div>
            <img className="w-20 p-1 mt-8 mx-auto rounded-s-full rounded-e-full" src={HotelLogo} />
            <h1 className="italic	font-bold text-2xl mt-2 text-center">"<span className="text-white text-3xl">Food</span> should be fun" <p>&</p> We are here to create <span className="text-white text-3xl">FUN</span></h1>
          </div>

         <div className="leading-9 my-14 mx-auto text-black text-lg">
            <ul>
              <li className="text-3xl font-bold italic my-4 text-white">Delivery Time</li>
              <li className="leading-5 my-4"><span className="font-semibold text-2xl">Sunday - Thursday</span><br />10:00am - 11:00pm</li>
              <li className="leading-5"><span className="font-semibold text-2xl">Friday - Saturday</span><br />Off day</li>
            </ul>
         </div>

         <div className=" mx-auto my-14 leading-9 text-blank text-lg">
          <ul>
            <li className="text-3xl font-bold italic text-white my-4">Contact</li>
            <li><span className="font-semibold text-2xl underline">Location:</span> KR-Puram-52001,Bangalore</li>
            <li><span className="font-semibold text-2xl underline">Phone:</span> 0178561237</li>
            <li><span className="font-semibold text-2xl underline">Email:</span> Food@gmail.com</li>
          </ul>
         </div>

         <div className="mx-auto my-14 text-black leading-9 text-lg">
          <ul>
            <li className="text-3xl font-bold leading-5 italic text-white my-4">Newsletter</li>
            <small>Subscribe our Newsletter</small>
            <div className="flex">
            <input className="w-56 h-8 rounded-lg text-center" type="text" placeholder="Food@gmail.com"/>
            <a className="scale-150 ml-2 mt-2 text-white" ><RiLoginCircleFill /></a>
            </div>
          </ul>
        <div className="flex mt-12 gap-4">
            <p className="font-semibold text-2xl underline">Follow :</p>
            <a href="https://www.facebook.com/zomato" target="blank" className="mt-2 scale-150"> <SiFacebook /></a>
            <a href="https://www.instagram.com/zomato/" target="blank" className="ml-2 mt-2 scale-150"><PiInstagramLogoFill /></a>
            <a href="https://twitter.com/zomato" target="blank" className="ml-2 mt-2 scale-150"><AiFillTwitterCircle /></a>
            <a href="https://in.linkedin.com/company/zomato" target="blank" className="ml-2 mt-2 scale-150"><AiFillLinkedin /></a>
            <a href="https://www.youtube.com/zomato" target="blank" className="ml-2 mt-2 scale-150"><BsYoutube /></a>
        </div>
         </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer;