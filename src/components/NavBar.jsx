import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate=useNavigate();
  function logoutHandler(){
    navigate("/");
  }


  return (
    <div className='bg-neutral-100'>
    <div className=' text-white flex  items-center justify-between px-8 py-8 bg-[#F5BA13] '>
        <Link className='text-xl font-bold' to={"/dashboard"}>DashBoard</Link>
        <button onClick={logoutHandler} >Logout</button>
    </div>
    <h1 className='flex items-center justify-center h-[80vh] text-2xl text-green-600 font-bold capitalize'>click on the dashboard for creating blog</h1>
    </div>
  )
}



export default NavBar
