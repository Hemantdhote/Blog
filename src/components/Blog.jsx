import React from 'react'
import DashBoard from './DashBoard'

const Blog = ({data,index,deleteHandler}) => {
  

  
  
  
  return (
    <div>
        <div className='p-5 bg-zinc-800 text-white w-68 rounded-md'>
          <h1 className='text-xl font-bold'>{data.title}</h1>
          <div className='w-68 block'>{data.discription}</div>
          <div className='flex items-center justify-between mt-3'>
            <button className='px-3 py-2 bg-blue-500 rounded-md text-white'>Edit</button>
            <button onClick={()=>deleteHandler(index)}  className='px-3 py-2 bg-red-500 rounded-md text-white'>Delete</button>
          </div>
        </div>
      
    </div>
  )
}

export default Blog
