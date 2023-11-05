import React from "react"
import login from "../assets/loginimg.avif"
import { Link } from "react-router-dom";


const Login = ()=>{
  const background = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D";
  return(
    <>
     <div className="w-full h-[46rem] fixed" style={{ backgroundImage: `url(${background})`,  backgroundSize: "cover",
      backgroundRepeat: "no-repeat", }}>

        <div className="m-36 p-10 w-[30rem] h-[26rem] backdrop-blur-lg rounded-lg hover:shadow-2xl border mx-auto items-center border-transparent backdrop-brightness-110">
         <form action="#" className="w-80 mt-16 gap-6 flex flex-col mx-auto">
            <input className="p-2 border-2 border-orange-600" type="text" placeholder="name or email" />
            <input className="p-2 border-2 border-orange-600" type="password" placeholder="password" />
            <button className="w-40 ml-20 rounded-2xl text-white font-bold text-xl bg-orange-600 p-2">Login</button>
            <h1 className="text-center text-white">Dont't have account? <Link to={"/signup"}>Signin</Link> </h1>
         </form>
        </div>

     </div>  
    </>  
  )
}

export default Login;