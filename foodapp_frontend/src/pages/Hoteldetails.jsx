import React from "react";
import hotel1 from "../assets/hotelone.jpg"
import hotel2 from "../assets/hoteltwo.jpg"
import empire from "../assets/empire.jpg"
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import hotel4 from "../assets/hotel6.jpg";
import desert from "../assets/desser.jpg";
import breakfast from "../assets/breakfast.jpg";


let hotemDetails = [
  {
    image : empire,
    name : "Empire Restaurant",
    speciality : "North Indian, Biriyani, Kebab, South Indian, Mughlai, Chinese, Seafood",
    location : "Brookefield, Bangalore",
    timing : "Open Now - 11am - 3am",
  },
  {
    image : desert,
    name : "Bankingo",
    speciality : "Bakery, Desserts, Cake",
    location : "Brookefield, Bangalore",
    timing : "Open Now - 10am - 6pm",
  },
  {
    image : breakfast,
    name : "vijayawada Tiffins",
    speciality : "North Indian, Breakfast, Coffee, Indian",
    location : "Brookefield, Bangalore",
    timing : "Open Now - 7am - 12pm",
  }
]


const Hoteldetails = ()=>{
  return(
    <div>
      <Navbar />
      <div>

        <div className="flex bg-purple-200 h-[20rem] w-[96rem]">
          <img className="w-[46rem]" src={hotel4} />
          <img className="w-[56rem]" src={hotel2} />
          <img className="w-[40rem]" src={hotel1} />
        </div>
        <div className="text-left ml-[8rem] mt-4">
          <h1 className="text-5xl text-orange-600 font-extrabold tracking-wide p-6">Top Restaurant -</h1>
          <div className="flex gap-6 mr-20 p-10 mb-40">
          {
           hotemDetails.map((item,index)=>(
          <div className="text-orange-600">
          <img className="rounded-lg" src={item.image} alt="" />
          <h1 className="text-left font-bold ml-1 text-3xl mt-6">{item.name}</h1>
          <h3 className="text-left text-lg ml-1 font-medium">{item.speciality}</h3>
          <h3 className="text-left text-md ml-1">{item.location}</h3>
          <h3 className="text-left text-sm ml-1">{item.timing}</h3>
          </div>
          )) }
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Hoteldetails;