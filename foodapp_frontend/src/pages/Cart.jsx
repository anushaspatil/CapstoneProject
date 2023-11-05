import React from "react";
import { useSelector, useDispatch } from "react-redux";


const Cart = ()=>{
    const Appcart = useSelector((state)=>state.cart)

  return(
    <>
      <h1>cart details</h1>
      {/* {
          Appcart.map((post, id)=>{
            return(
              <div>

              </div>
            )
          })
      } */}

    </>
  )
}

export default Cart;