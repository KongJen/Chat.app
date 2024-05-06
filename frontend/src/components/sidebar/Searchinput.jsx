import React, { useState } from 'react'
import { IoSearch, IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const Searchinput = () => {
  const [search,setSearch ] = useState("")
  const {setSelectedConversation}= useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) ReturnDocument;
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long')
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
      
    } else toast.error("No such usert found!")
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-0'>
        <input type="text" placeholder='Search...' className='text-gray-900 input input-borded rounded-full bg-gray-50 border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
        value = {search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-blue-700 border-blue-700 hover:bg-blue-700 hover:border-blue-700 text-white '>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default Searchinput