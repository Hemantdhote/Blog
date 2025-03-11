import React,{useState,useEffect} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState([]);
  const [createUser, setCreateUser] = useState({
    name:"",
    email:"",
    password:""
  });
  
  
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUser(storedUsers);
  }, []);
  


  const nevigate=useNavigate();


  function submitHandler(e){
    e.preventDefault();
    const existingUser=user.some((u)=>u.email===createUser.email);
    if(existingUser){
      alert("user already exist");
      setCreateUser({
        name:"",
        email:"",
        password:""
      })
    }
    else{
      const updatedUsers = [...user, createUser];
      setUser(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setCreateUser({
        name:"",
        email:"",
        password:""
      })
      alert("user  registered succsessfully")

      nevigate("/navbar")
    }


    }
   
  return (
    <div>

      <div className='h-screen w-full bg-neutral-100  flex flex-col items-center justify-center'>
        <div className='bg-white px-8 py-12 rounded-xl shadow-lg shadow-blue-300/50'>
        
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-5'>
        <h1 className='mb-4 font-bold text-xl'>Register User</h1> 
          <input value={createUser.name} onChange={(e)=>setCreateUser({...createUser,name:e.target.value})} className='px-3 py-2 bg-neutral-100 rounded-md outline-none' type="text" placeholder='Enter user name' required />
          <input value={createUser.email} onChange={(e)=>setCreateUser({...createUser,email:e.target.value})} className='px-3 py-2 bg-neutral-100 rounded-md outline-none' type="text" placeholder='Enter your Email' required/>
          <input value={createUser.password} onChange={(elem)=>setCreateUser({...createUser,password:elem.target.value})} className='px-3 py-2 bg-neutral-100 rounded-md outline-none ' type="password"  placeholder='Enter password' required/>
          <button className='px-20 py-2 bg-orange-400 rounded-md outline-none text-white'>submit</button>
          <p>If you have already account ? <Link to={"/login"} className='text-blue-600'>Please login</Link> </p>
        </form>
        </div>

      </div>
      
    </div>
  )
}

export default Register
