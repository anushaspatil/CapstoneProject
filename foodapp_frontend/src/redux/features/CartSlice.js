// import React from "react";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// initialState = {
//   cartItem : [],
// }

// const Base_URL = "http://localhost:8886"


// const fakeStore = createAsyncThunk("item/cart", async()=>{
//   const productInfo = await fetch("");
//   const data = await productInfo.json();
//   return data;
// } )

// export const CartSlice = createSlice({
//   name : "addTOcart",
//   initialState,
//   reducers : {
//     addcart : (state, action)=>{
//       console.log(action);
//       state.cartItem.push(action.payload)
//     }
//   }
// })

// export const {addcart} = CartSlice.actions;
// export default CartSlice.reducer;


// // reducers: {
// //   addItemToCart: (state, {payload}) => {
// //     const {id} = payload;
// //     const doesItemExist = state.find((item) => item.id === id);
// //     if(doesItemExist){
// //      return state.map((item) => {
// //       if(item.id === id){
// //         return {
// //          ...item,
// //          quantity: item.quantity + 1
// //         } 
// //        }
// //        return item;
// //      })                    
// //    } else {
// //      state.push({
// //        ...payload, quantity: 1
// //      })
// //    }
// //  }, 