import React from "react";
import Navbar from "../component/Navbar";
import Foodlist from "../component/Foodlist";
import Review from "../component/Review";
import Footer from "../component/Footer";


const Home = ()=>{
  return(
  <>
  <div className="container ">
    <Navbar />

    <Foodlist />
   

    <Review />

    <Footer />
  </div>
  </>
  )
}

export default Home;