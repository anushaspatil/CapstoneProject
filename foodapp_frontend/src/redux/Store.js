import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../redux/features/CartSlice"
import authReducer from "../redux/features/Auth";


const Store = configureStore({
  reducer : {
    auth : authReducer,


  },
})
  

export default Store;