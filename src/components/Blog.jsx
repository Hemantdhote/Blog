import React,{useState} from 'react'
import DashBoard from './DashBoard'

const Blog = ({data,index,deleteHandler ,editHandler}) => {
  const [comment, setComment] = useState([]);
  const [commentData, setCommentData] = useState("");


  function submitHandler(e){
    e.preventDefault();
    setComment([...comment,commentData])
    setCommentData("");
  }
  

  
  return (
    <div>
        <div className='p-5  bg-[#FFFFFF] w-68 rounded-md shadow-lg shadow-blue-300/50'>
          <h1 className='text-xl font-bold capitalize block break-words '>{data.title}</h1>
          <p className='block break-words '>{data.discription}</p>
          <div className='flex gap-2 py-2 block break-words' >
          {comment.map((comm,index)=>(
           <p className='opacity-[0.5] bg-zinc-300 px-2 pt-1 rounded-md '  key={index}>{comm}</p>
          ))}
          </div>
          <form onSubmit={submitHandler} className='flex items-center gap-5'>
          <input value={commentData} onChange={(e)=>setCommentData(e.target.value)} className='text-sm text-zinc-400 bg-zinc-100 px-[1vw] py-[0.5vw]  rounded-md outline-none'  type="text" placeholder='Add comment' required />
          <button type='submit'> send </button>
          </form>
          <div className='flex items-center justify-between mt-3'>
            <button onClick={()=>editHandler(index)} className='px-[1vw] py-[0.5vw] bg-zinc-400 rounded-md text-white'>Edit</button>
            <button onClick={()=>deleteHandler(index)}  className='px-[1vw] py-[0.5vw]  bg-[#F5BA13] rounded-md text-white'>Delete</button>
          </div>
        </div>
      
    </div>
  )
}

export default Blog





