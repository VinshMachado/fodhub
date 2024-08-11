import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    
    <div className=' flex flex-col  items-center justify-center my-80 '>
      <b><h1 className='text-xl'>LOGIN</h1></b>
      <input type="email" placeholder="Email" className="border-gray-600 placeholder:text-gray-600 pl-[14px] border-2 m-1 flex-col w-96 h-10 rounded-lg"></input>
      <input type="text" placeholder="Password" className="border-gray-600 placeholder:text-gray-600 pl-[14px] border-2  m-1 flex-col w-96 h-10 rounded-lg "></input>
      <div className='flex '>
      <input type="checkbox" placeholder="Password" ></input> <label className='mx-1 '>show password</label> <a href="www.youtube.com" className='text-blue-500 pl-32'> forgot password?</a>
      </div>
      <button className='bg-blue-500 w-96 h-10 rounded-lg my-1 font-bold text-white'>LOGIN</button>
      <h2>dont have an account?<a href="www.youtube.com" className='text-blue-500'> sign up</a></h2> 
    </div>
  )
}

export default index