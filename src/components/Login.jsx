import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  function submitHandler(e){
    e.preventDefault();

  }
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-screen w-full'>
        <h1 className='mb-5 font-bold text-xl'>Login User</h1>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-3 '>
          <input className='px-3 py-2 bg-neutral-300 rounded-md outline-none' type="text" placeholder='Enter your email' />
          <input className='px-3 py-2 bg-neutral-300 rounded-md outline-none' type="password" placeholder='Enter the password' />
          <button to={"/navbar"} className='bg-blue-500 text-white rounded-md px-5 py-2'>Login</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
