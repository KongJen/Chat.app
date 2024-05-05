import React from 'react'
import { IoSearch, IoSearchSharp } from "react-icons/io5";

const Searchinput = () => {
  return (
    <from className='flex items-center gap-0'>
        <input type="text" placeholder='Search...' className='input input-borded rounded-full bg-gray-50 border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500'/>
        <button type='submit' className='btn btn-circle bg-blue-700 border-blue-700 hover:bg-blue-700 hover:border-blue-700 text-white '>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </from>
  )
}

export default Searchinput