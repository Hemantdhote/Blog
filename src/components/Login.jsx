import React,{useEffect, useState} from 'react'
import { use } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const [UsersList,setUsersList]=useState([]);
  const nevigate=useNavigate();
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  });

  useEffect(()=>{
    const a=JSON.parse(localStorage.getItem("users"))||[];
    setUsersList(a)    
  },[])


  function submitHandler(e) {
    e.preventDefault();
    const existingUser=UsersList.find((elem)=>elem.email===formData.email && elem.password===formData.password)
    if(existingUser){
      nevigate("/navbar")
    }
    else{
      alert("invalid credentials")
      setFormData({
        email:"",
        password:""
      })
    }
    
    
  }
  return (
    <div className='bg-neutral-100'>
      <div className='flex flex-col items-center justify-center h-screen w-full'>
        <div className='px-[2vw] py-[4vw] bg-white shadow-lg shadow-blue-300/50 px-8 py-15 rounded-lg'>
       
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-[1vw] '>
        <h1 className='mb-[0.8vw] font-bold text-[1.8vw]'>Login User</h1>
          <input value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className='px-[1vw] py-[0.5vw] bg-neutral-100 rounded-md outline-none text-[1.1vw]' type="text" placeholder='Enter your email' />
          <input value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} className='px-[1vw] py-[0.5vw]  bg-neutral-100 rounded-md outline-none text-[1.1vw]' type="password" placeholder='Enter the password' />
          <button to={"/navbar"} className='bg-orange-400 text-white rounded-md text-[1.1vw] px-[5.2vw] py-[0.5vw] '>Login</button>
          <p>If you dont't have account ? <Link to={"/"} className='text-blue-600'>Click Here</Link> </p>
        </form>
        </div>
      </div>
      
    </div>
  )
}

export default Login
