import React, { useState } from 'react'
import MemberDetails from '../Components/MemberDetails'


const Teams = () => {
   
  return (
    <div
  className="fixed w-full h-[100vh] z-30 top-0 left-0 overflow-hidden flex flex-col items-center items-start"
  style={{ backgroundColor: "rgba(248, 250, 252, 0.7)" }}
    >
        {/* Add member form  */}
        <div className='w-[80vw] bg-[#CBE5FF] mt-16 p-3 rounded-3xl md:flex gap-10'>
            <div className='w-full flex flex-col'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Enter Team Member Name' className='p-2 rounded-xl' />
            </div>
            <div className='w-full flex flex-col '>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Enter Team Member Email' className='p-2 rounded-xl'/>
            </div>
            <div className='w-full flex flex-col'>
                <label htmlFor="role">Role</label>
                <input type="text" name='role' placeholder='Enter Team Member Role' className='p-2 rounded-xl'/>
            </div>
           <div className='mt-6 flex justify-center md:w-[30vw] '>
           <button className='p-2 bg-white rounded-xl'>Add Member</button>
           </div>
        </div>

        {/* member list  */}
        <div className='w-[80vw] p-3 bg-[#CBE5FF] rounded-3xl mt-10 overflow-y-auto'>
           <MemberDetails/>
           <MemberDetails/>
           <MemberDetails/>

        </div>

    </div>
  )
}

export default Teams