import React from 'react'
import DashBoard from './DashBoard'

const Blog = ({data,index,deleteHandler ,editHandler}) => {
  

  
  
  
  return (
    <div>
        <div className='p-5  bg-[#FFFFFF] w-68 rounded-md shadow-lg shadow-blue-300/50'>
          <h1 className='text-xl font-bold capitalize'>{data.title}</h1>
          <p className='h-10 block block'>{data.discription}</p>
          <button className='btn'>comment</button>
          <div className='flex items-center justify-between mt-3'>
            <button onClick={()=>editHandler(index)} className='px-3 py-2 bg-zinc-400 rounded-md text-white'>Edit</button>
            <button onClick={()=>deleteHandler(index)}  className='px-3 py-2 bg-[#F5BA13] rounded-md text-white'>Delete</button>
          </div>
        </div>
      
    </div>
  )
}

export default Blog
