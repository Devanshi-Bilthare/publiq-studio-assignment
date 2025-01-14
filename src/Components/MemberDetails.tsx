import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const MemberDetails = () => {
    const [isOpen,setIsOpen] = useState(false)

    const handleEditToggle = ()=> {
        setIsOpen(!isOpen)
    }

  return (
    <div className='mb-3 w-full p-2 bg-white rounded-xl flex flex-col md:flex-row justify-between items-center'>
    <div className='flex flex-col md:flex-row gap-4 items-center '>
    <div className='w-16 h-16 rounded-full bg-[#FFD3E2] flex justify-center items-center text-xl shrink-0'>E</div>
    <div className='text-center md:text-start'>
        <h2>Devanshi Bilthare</h2>
        <p>devanshibilthare54@gmail.com</p>
        <h3>Designer</h3>
    </div>
    </div>

    <div className='flex gap-3 mt-3'>
        <button  className='md:py-3 py-2 px-6 bg-[#CBE5FF] rounded-3xl flex items-center gap-3' onClick={handleEditToggle}><MdEdit /> Edit</button>
        <button className='md:py-3 px-6 bg-[#CBE5FF] rounded-3xl flex items-center gap-3'><MdDelete /> Delete</button>

    </div>

    {isOpen ?  <div className='absolute top-[20vh] md:left-[30vw] md:w-[30vw] w-[80vw] md:bg-[#CBE5FF] bg-white p-6 rounded-3xl gap-10 border-2 border-[#CBE5FF]'>
        <h2 className='text-center text-xl'>Edit Member Detail</h2>
            <div className='w-full flex flex-col'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Enter Team Member Name' className='p-2 rounded-xl md:bg-white bg-[#CBE5FF]' />
            </div>
            <div className='w-full flex flex-col '>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Enter Team Member Email' className='p-2 rounded-xl md:bg-white bg-[#CBE5FF]'/>
            </div>
            <div className='w-full flex flex-col'>
                <label htmlFor="role">Role</label>
                <input type="text" name='role' placeholder='Enter Team Member Role' className='p-2 rounded-xl md:bg-white bg-[#CBE5FF]'/>
            </div>
           <div className='mt-6 flex justify-center gap-3'>
           <button className='p-2 rounded-xl md:bg-white bg-[#CBE5FF]'>Edit Member</button>
           <button className='p-2 rounded-xl md:bg-white bg-[#CBE5FF]' onClick={handleEditToggle}>Cancel</button>

           </div>
        </div> : ''}
</div> 
  )
}

export default MemberDetails