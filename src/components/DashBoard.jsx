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
    <div>
      
      <div className='flex items-center justify-between px-8 py-5 bg-neutral-300'>
      <h1 className='text-xl font-bold'> Blogs</h1>
      <Link className='' to={"/"} >Logout</Link>
      </div>

      <div className='w-full flex  flex-col  mt-5 items-center justify-center'> 
        <h1 className='mb-3 text-xl font-bold text-green-500'>Create Blog</h1>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-3'>
          <input value={formData.title} onChange={(e)=>setformData({...formData,title:e.target.value})}  className='px-10 py-2 bg-neutral-600 rounded-md outline-none text-white' type="text" placeholder='Enter the title' />
          <textarea value={formData.discription} onChange={(e)=>setformData({...formData,discription:e.target.value})} className='px-12 py-2 bg-neutral-600 rounded-md outline-none text-white' type="text" placeholder='Enter the discription' />
          <button  className='px-7 py-2 bg-blue-500 text-white rounded-md'>Create</button>

        </form>
      </div>

      <div className='p-4 mt-4 flex gap-5 flex-wrap'>

        {data.map((elem,index)=>(
        <Blog key={index} data={elem} index={index} deleteHandler={deleteHandler} editHandler={editHandler} />

        ))}

      </div>

     

      
      
    </div>
  )
}

export default DashBoard
