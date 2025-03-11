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
    <div>
      <div className='flex flex-col items-center justify-center h-screen w-full'>
        <h1 className='mb-5 font-bold text-xl'>Login User</h1>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-3 '>
          <input value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className='px-3 py-2 bg-neutral-300 rounded-md outline-none' type="text" placeholder='Enter your email' />
          <input value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} className='px-3 py-2 bg-neutral-300 rounded-md outline-none' type="password" placeholder='Enter the password' />
          <button to={"/navbar"} className='bg-blue-500 text-white rounded-md px-5 py-2'>Login</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
