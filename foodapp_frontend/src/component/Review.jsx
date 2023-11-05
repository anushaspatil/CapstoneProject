import React from "react";
import Person2 from "../assets/Person2.avif";
import Person4 from "../assets/Person4.avif";
import Person3 from "../assets/Person3.avif";
import Reviewcustomer from "../assets/Reviewcustomer.jpg";

let CustomerReview = [
  {
    image : Person2,
    name : "Ramya Shet",
    comment: "Need more choices, and in the morning should open before 7.30. It needs to either have a buffet service or faster serving time. It also needs to reduce mistakes in taking orders."
  },
  {
    image : Person4,
    name : "Vrishank",
    comment: "We visited this place for breakfast and dinner. The place is very conveniently located (on the highway ) with ample parking space. The food at both the meals was tasty and definitely worth the price. Good quantity served per portion."
  },
  {
    image : Person3,
    name : "RJessica paul",
    comment: "The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, nice arrangement and services from the staff while eating, we found nothing bad about this hotel."
  },
]

const Review = ()=>{
  return(
      <div>
      <div className="ml-28 ">
        <h1 className="text-4xl w-full font-bold tracking-wider">We are here to listen you <br /> <small className="text-orange-600 ml-40 text-5xl">Customer Review...,</small></h1>
        <div className="flex gap-20 mt-4">
        {
          CustomerReview.map((item,index)=>(
            <div key={index} className=" hover:shadow-2xl bg-orange-500 w-96 h-[20rem] rounded-3xl my-10 p-6">
            <div className="my-4">
            <p className="flex gap-3 text-2xl text-white font-bold"><img className="w-12 h-12 rounded-full" src={item.image} alt="" />{item.name}</p>
            <p className="text-lg text-justify   text-white mt-6 font-medium leading-7">{item.comment}</p>
          </div>
          </div>
          ))
        }
        </div>
      <img className="mx-40" src={Reviewcustomer} alt="" />
      </div>
    </div>

    
      
  )
}

export default Review;