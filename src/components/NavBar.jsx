import React from 'react'
import { Link,useNavigate } from 'react-router-dom'





 // useEffect(() => {
  //   const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  //   setUsers(storedUsers);
  // }, []);

  // function submitHandler(e) {
  //   e.preventDefault();
  //   const existingUser = users.find(user => user.email === loginData.email && user.password === loginData.password);
    
  //   if (existingUser) {
  //     alert("Login successful");
  //     navigate("/navbar");
  //   } else {
  //     alert("Invalid email or password");
  //   }
  // }



const NavBar = () => {
  const navigate=useNavigate();
  function logoutHandler(){
    navigate("/");
  }


  return (
    <div>
    <div className='flex  items-center justify-between px-8 py-5 bg-neutral-300'>
        <Link to={"/dashboard"}>DashBoard</Link>
        <button onClick={logoutHandler} >Logout</button>
    </div>
    <h1 className='flex items-center justify-center h-[80vh] text-2xl text-green-600 font-bold capitalize'>click on the dashboard for creating blog</h1>
    </div>
  )
}



export default NavBar
