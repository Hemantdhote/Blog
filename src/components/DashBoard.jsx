import React,{useState} from 'react'
import NavBar from './navBar'
import { Link, useNavigate } from 'react-router-dom'
import Blog from './Blog';

const DashBoard = () => {
  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState([]);
  const [formData, setformData] = useState({
    title:"",
    discription:""
  });
  


  function submitHandler(e) {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedData = data.map((item, index) => 
        index === editIndex ? formData : item
      );
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }
    setformData({
      title: "",
      discription: ""
    });
  }

  function deleteHandler(index){
    const filteredData=data.filter((_,idx)=>idx!==index)
    setData(filteredData)
  }

  function editHandler(index) {
    setEditIndex(index);
    setformData(data[index]); 
  }
  

  return (
    <div className='w-full bg-neutral-100 h-screen'>
      
      <div className='bg-[#F5BA13] flex items-center justify-between px-8 py-8 w-[100vw] text-white '>
      <h1 className='text-xl font-bold'> Blogs</h1>
      <Link className='' to={"/"} >Logout</Link>
      </div>

<div className='flex items-center justify-center '>   
     <div className='w-[30%] flex items-start rounded-lg mt-10  bg-[#FFFFFF] p-2 relative p-8 shadow-lg shadow-black-300/50'> 
        {/* <h1 className='mb-3 text-xl font-bold text-green-500'>{editIndex!==null?"Update Blog":"Create Blog"}</h1> */}
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-3'>
          <input value={formData.title} onChange={(e)=>setformData({...formData,title:e.target.value})}  className='rounded-md outline-none text-lg' type="text" placeholder='Enter the title' />
          <input value={formData.discription} onChange={(e)=>setformData({...formData,discription:e.target.value})} className='px-12 rounded-md outline-none text-lg' type="text" placeholder='Enter the discription' />
          <button  className=' right-[10%] top-[80%] absolute h-13 w-13 bg-[#F5BA13] text-white rounded-[50%] text-md'>{editIndex!==null?"Update":"Add"}</button>

        </form>
      </div>
      </div>


      <div className='p-4 mt-4 flex gap-5 flex-wrap '>

        {data.map((elem,index)=>(
        <Blog key={index} data={elem} index={index} deleteHandler={deleteHandler} editHandler={editHandler} />

        ))}

      </div>

     

      
      
    </div>
  )
}

export default DashBoard
