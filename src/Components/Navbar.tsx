import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full px-4 md:px-10 py-2'>
        <div className='flex items-center'>
        <IoIosAddCircle className='md:w-16 md:h-16 w-12 h-12 text-[#99B3FE]' />
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
    </div>
  )
}

export default Navbar