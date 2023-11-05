import React from "react";
import {BsFilterLeft} from "react-icons/Bs";
import biriyani from "../assets/biriyani.avif";
import Pizza from "../assets/Pizza.avif";
import Chicken from "../assets/Chicken.webp";
import Thali from "../assets/Thali.avif";
import Burger from "../assets/burger3.avif";
import Cake from "../assets/Cake.avif";
import Dosa from "../assets/Dosa.avif";
import Paratha from "../assets/Paratha.avif";
import EmpireHotel from "../assets/EmpireHotel.avif";
import BakingoHotel from "../assets/BakingoHotel.avif";
import VijaywadaHotel from "../assets/VijaywadaHotel.avif";
import quickDelivery from "../assets/quickDelivery.avif";
import SuperDine from "../assets/SuperDineIn.png";
import EasyPickup from "../assets/easy_pick_up.png";
import pizza1 from "../assets/pizza1.jpg";
import burger from "../assets/burger1.jpg";
import biriyani1 from "../assets/biriyani2.jpg";
import palav from "../assets/palav2.webp"
import rotti1 from "../assets/rotti1.jpg";
import chapathi from "../assets/chapathi1.jpg";
import shake1 from "../assets/shake1.jpg";
import noodles from "../assets/noodles2.webp";
import icecream from "../assets/ecream1.jpg";
import sandwitch from "../assets/sandwitch.jpg";
import frenchfries from "../assets/fries.jpg";
import coffe from "../assets/coffe.jpg";
import { Link, useNavigate } from "react-router-dom";
// import Cart from "../pages/Cart";


let food = [
  {
  image:pizza1,
  name:"Pizza",
  price:"199"
  },
  {
  image:burger,
  name:"Burger",
  price:"299"
  },
  {
  image:biriyani1,
  name:"Biriyani1",
  price:"399"
  },
  {
    image:palav,
    name:"Pulao",
    price:"399"
  },
  {
    image:rotti1,
    name:"Rotti",
    price:"399"
  },
  {
    image:chapathi,
    name:"Chapathi",
    price:"399"
  },
  {
    image:shake1,
    name:"Chocolate Milk Shake",
    price:"399"
  },
  {
    image:noodles,
    name:"Ramen Noodles",
    price:"399"
  },
  {
    image:icecream,
    name:"Icecream",
    price:"399"
  },
  {
    image:sandwitch,
    name:"Sandwich",
    price:"399"
  },
  {
    image:frenchfries,
    name:"French Fries",
    price:"399"
  },
  {
    image:coffe,
    name:"Cold Ice Coffee",
    price:"399"
  },
]
  
let restoName =[
  {
    image : EmpireHotel,
    name : "Empire Restaurant",
    rating : "4.3",
    speciality : "North Indian",
    offerPrice : "150 for one",
    update : "43 min",
  },
  {
    image : BakingoHotel,
    name : "Bakingo",
    rating : "3.9",
    speciality : "Bakery, Desserts,",
    offerPrice : "150 for one",
    update : "31 min",
  },
  {
    image : VijaywadaHotel,
    name : "Vijayawada Tiffins",
    rating : "4.1",
    speciality : "South Indian,",
    offerPrice : "150 for one",
    update : "20 min",
  },
]

let features = [
  {
    image : quickDelivery,
    name : "Quick Delivery",
    title : "Food@Home",
    quote : "Always On Time",
  },
  {
    image : SuperDine,
    name : "Super Dine In",
    title : "Love@Food",
    quote : "Food is a Sprinkle of Love",
  },
  {
    image : EasyPickup,
    name : "Easy Pick Up",
    title : "Food@Takeaway",
    quote : "Easy & Fast pickup",
  },
]

let orderList = [
  {
    image : biriyani,
    name : "Biriyani",
  },
  {
    image : Pizza,
    name : "Pizza",
  },
  {
    image : Chicken,
    name : "Chicken",
  },
  {
    image : Thali,
    name : "Thali",
  },
  {
    image : Burger,
    name : "Burger",
  },
  {
    image : Cake,
    name : "Cake",
  },
  {
    image : Dosa,
    name : "Dosa",
  },
]


const Foodlist = ()=>{
  const navigate = useNavigate();

  return(
    
  <div className="container">

{/*********************** FIRST-ORDER LIST ***************/}
    <div className="flex space-x-6 flex-row mt-10 ml-[6rem] content-start w-[30rem]">
      <button className="border rounded-md w-24 bg-orange-500 text-white flex font-semibold shadow-lg p-2" ><BsFilterLeft className="w-6 h-6" />Filters</button>
        <button className="border rounded-md bg-orange-500 w-24 text-white shadow-lg font-semibold">Rating 4.0+</button>
        <button className="border rounded-md bg-orange-500 w-24 text-white shadow-lg font-semibold">Pure Veg</button>
    </div>

    <div className="border h-80 shadow-md mt-6 bg-orange-300">
      <h1 className="font-bold text-3xl ml-16 mt-4">Inspiration for your first order</h1>
      <div className="flex content-center	justify-center">
        {
          orderList.map((item, index)=>(
          <div key={index} className="mt-12 ml-10 cursor-pointer mx-auto p-2">
         <Link target="blank" to={"/FirstOrder"}><img  src={item.image} className="w-36 rounded-full"/>
            <h3 className="text-center text-xl mt-1 font-semibold">{item.name}</h3></Link> 
          </div>
          ))}
      </div>
    </div>

{/*********************** FOOD ITEM LIST ****************/}
  <div>
      <div className="text-6xl mt-20 p-2 font-extrabold font-serif text-orange-600 underline italic roun text-center">
         <h1 >Popular Foods</h1>
      </div>
      <div className="grid grid-cols-3 bg-white my-8 ml-28 p-20 tracking-wider gap-y-14">
        {
        food.map((item,index)=>(
           <div key={index} className="w-[20rem] h-[20rem] hover:shadow-2xl border-orange-600 border">
          <img className="w-48 p-6 ml-16" src={item.image} />
          <div>
          <h1 className="text-center  font-semibold text-2xl">{item.name}</h1>
          <h4 className="flex text-lg justify-around ps-2 my-16 items-center font-medium">&#8377;{item.price}<button className="p-2 font-medium text-lg bg-orange-500 tracking-wider rounded-lg text-white">Add to Cart</button></h4>
          </div>
        </div>
        ))}
    </div>
  </div>


{/*********************** RESTUARANT LIST ****************/}
    <div className="">
      <h1 className="text-2xl mt-20 p-2 font-extrabold font-serif text-orange-600  italic roun text-center">KR-Puram Restaurants, Bangalore</h1>
      <div className="flex justify-around p-8">
        {
          restoName.map((item, index) => (
            <div key={index} className="hover:shadow-2xl hover:border bg-white p-6 h-[22rem]">
                <Link to={"/hoteldetails"} target="blank"><img className="w-96 h-56"  src={item.image} />
                  <div className="grid grid-cols-2 mt-4 gap-1">
                  <h3 className="text-xl tracking-wide font-semibold">{item.name}</h3>
                  <span className="border w-14 text-white font-medium text-center ml-32 bg-green-600">{item.rating} &#9733;</span>
                  <h3>{item.speciality}</h3>
                  <span className="ml-[5.5rem] w-[6rem] text-right">&#8377;{item.offerPrice} <small>{item.update}</small></span>
                  </div> </Link>       
                </div>
          ))}
      </div>
    </div>


{/*********************** ADVANTAGE OF APP ****************/}
    <div>
      <div className=" w-[34rem] h-16 m-auto py-8 text-center tracking-widest">
      <p className="text-orange-600	text-xl font-semibold	">What we serve</p>
      <h1 className="text-4xl	mt-4 font-bold">Just sit backe at home <br /> we will <span className="text-orange-600">take care</span></h1>
      </div>

      <div className="flex justify-around p-36"> 
      {
        features.map((item, index) =>(
          <div key={index} className="text-center">
          <img className="w-[8rem] ml-5" src={item.image} alt="" />
          <div className="p-4 mt-10">
          <h2 className="font-bold text-xl">{item.name}</h2>
          <p className="text-orange-600 font-medium text-lg">{item.title}</p>
          <h3 className="font-medium">{item.quote}</h3>
          </div>
        </div>
        ))

      }
      </div>
    </div>

  </div>
  )
}

export default Foodlist;