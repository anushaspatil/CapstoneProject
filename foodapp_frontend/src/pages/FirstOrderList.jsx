import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import burger from "../assets/img1.avif";
import biriyani from "../assets/biriyani3.webp";
import thali from "../assets/Thali22.avif";
import thali2 from "../assets/Thali3.avif";
import pizza1 from "../assets/pizza3.avif";
import pizza2 from "../assets/pizza4.avif";
import kabab from "../assets/kabab2.avif";
import cake from "../assets/Cake3.avif";
import dosa from "../assets/dosa3.avif";


let food_Type = [
  {
    image : burger,
    name : "Leon's Burgers",
    rating : "4.2",
    speciality : "Burger, Fast Food",
    offerPrice : "150 for one",
    update : "35 min",
  },
  {
    image : biriyani,
    name : "Meghana Foods",
    rating : "3.5",
    speciality : "Biriyani, Andhra, North Indian",
    offerPrice : "300 for one",
    update : "40 min",
  },
  {
    image : thali,
    name : "The Punjabi Rasoi",
    rating : "4.3",
    speciality : "North Indian, Mughlai",
    offerPrice : "200 for one",
    update : "38 min",
  },
  {
    image : pizza2,
    name : "The Groot",
    rating : "3.8",
    speciality : "Continental, Italian",
    offerPrice : "400 for one",
    update : "41 min",
  },
  {
    image : thali2,
    name : "Gopaljee Cafe",
    rating : "4.0",
    speciality : "North Indian, Street Food",
    offerPrice : "209 for one",
    update : "30 min",
  },
  {
    image : dosa,
    name : "Sri Udupi Food Hub",
    rating : "4.5",
    speciality : "South Indian, Chinese",
    offerPrice : "120 for one",
    update : "35 min",
  },
  {
    image : kabab,
    name : "Salt-Indian Restaurant Bar",
    rating : "3.9",
    speciality : "North Indian, Seafood",
    offerPrice : "200 for one",
    update : "35 min",
  },
  {
    image : cake,
    name : "Aubree",
    rating : "4.2",
    speciality : "Bakery, Desserts, Italian",
    offerPrice : "150 for one",
    update : "27 min",
  },
  {
    image : pizza1,
    name : "The Pizza Bakery",
    rating : "3.8",
    speciality : "Pizza, Pasta, Salad",
    offerPrice : "400 for one",
    update : "47 min",
  },
]

const FirstOrderList = ()=>{
  return(
    <>
    <Navbar />
    

    <div className="">
      <h1 className="text-4xl mt-20 p-2 font-extrabold font-serif text-black underline decoration-orange-600 decoration-8 text-center">Enjoy Your First-Order</h1>
      <div className="grid grid-cols-3 gap-12 justify-around p-12">
        {
          food_Type.map((item, index) => (
            <div key={index} className="hover:shadow-2xl hover:border bg-white p-6 w-[28rem] h-[22rem]">
                  <img className="w-80 h-56 ml-8 rounded-xl"  src={item.image} />
                  <div className="grid grid-cols-2 mt-4 gap-">
                  <h3 className="text-xl tracking-wide font-semibold">{item.name}</h3>
                  <span className="h-8 w-12 font-medium text-white text-center ml-24 bg-green-600">{item.rating} &#9733;</span>
                  <h3>{item.speciality}</h3>
                  <span className="ml-[3rem] w-[6rem] text-right">&#8377;{item.offerPrice} <small>{item.update}</small></span>
                  </div>        
                </div>
          ))}
      </div>
    </div>
    



    <Footer />
    </>
  )
}

export default FirstOrderList;