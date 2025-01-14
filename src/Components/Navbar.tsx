import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)

    const handleOpenToggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='flex justify-between items-center w-full py-2'>
        <div className='flex items-center'>
        <IoIosAddCircle className='md:w-16 md:h-16 w-12 h-12 text-[#99B3FE]' onClick={handleOpenToggle} />
        <div className='md:w-[30vw] h-12 md:border-2 rounded-3xl md:ms-4 flex items-center ps-2'>
        <CiSearch  className='w-8 h-8 ' />
        </div>
        </div>

        <div className='flex'>
            <div className='w-10 h-10 rounded-full bg-[#FEE4CB] flex justify-center items-center'>D</div>
            <div className='ms-[-15px] w-10 h-10 rounded-full bg-[#FFD3E2] flex justify-center items-center'>E</div>
            <div className='ms-[-15px] w-10 h-10 rounded-full bg-[#BAF3D2] flex justify-center items-center'>A</div>
            <div className='ms-[-15px] w-10 h-10 rounded-full bg-[#FBC5C7] flex justify-center items-center'>Z</div>
            <div className='ms-[-15px] w-10 h-10 text-2xl rounded-full bg-[#CBE5FF] flex justify-center items-center'>+</div>
        </div>

        {isOpen ? <div className='absolute w-[26vw] bg-white border-2 border-[#CBE5FF] top-4 left-28 p-4 rounded-3xl z-30'>
                <h2>Add Project</h2>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="projName">Project Name</label>
                    <input type="text" name='projName' id='projName' placeholder='Project Name' className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' />
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor='deadline'>Deadline</label>
                    <input type="date" name='deadline' id='deadline' className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' />

                    <div className='flex mt-4 gap-3 justify-center'>
                        <button className='py-3 px-6 bg-[#CBE5FF] rounded-3xl'>Add Project</button>
                        <button className='py-3 px-6 bg-[#CBE5FF] rounded-3xl' onClick={handleOpenToggle}>Cancel</button>
                    </div>
                </div>

            </div> : ''}
    </div>
  )
}

export default Navbar