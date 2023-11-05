import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import registerUser from "../redux/features/Auth"


const Signup = ()=>{
  console.log(registerUser, "hey")
  const background = "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDR8fHxlbnwwfHx8fHw%3D";

  const [name, setName]= useState("");
  const [password, setPassword]=useState("");
  const [email, setEmail]=useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async(e)=>{
    e.preventDefault();

    
    // Basic form validation
    // if (!name || !email || !password) {
    //   alert("All fields are required");
    //   return;
    // }
    const userData = {
      name,password,email,phoneNumber
    }
    console.log(registerUser)
    dispatch(registerUser(userData))
    .then(() => {
    navigate("/cart");
  })
  .catch((error) => {
    console.error("Registration failed:", error);
  });
  }

  return(
    <>
     <div className="w-full h-[46rem] fixed" style={{ backgroundImage: `url(${background})`,  backgroundSize: "cover",
      backgroundRepeat: "no-repeat", }}>

        <div className="m-36 p-10 w-[30rem] h-[28rem] backdrop-blur-lg rounded-lg hover:shadow-2xl border mx-auto items-center border-transparent backdrop-brightness-75">
         <form onSubmit={handleSignup} action="#" className="w-80 mt-2 gap-6 flex flex-col mx-auto">
            <input className="p-2 border-2 border-orange-600" type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="name" />
            <input className="p-2 border-2 border-orange-600" type="text" onChange={(e)=>{setEmail(e.target.value)}}  placeholder="email" />
            <input className="p-2 border-2 border-orange-600" onChange={(e)=>setPhonenumber(e.target.value)}  type="number" placeholder="phonenumber" />
            <input className="p-2 border-2 border-orange-600" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />
            <button className="w-40 ml-20 rounded-2xl text-white font-bold text-xl bg-orange-600 p-2">Sign Up</button>
            <Link to={"/user/login"}> <h1 className="text-center text-white">Already have an account? Login </h1></Link>
         </form>
        </div>

     </div>  
    </>  
  )
}

export default Signup;