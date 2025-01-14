import React, { useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import Task from './Task'

const Project = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
    const [isEditProjectOpen, setIsEditProjectOpen] = useState(false)




    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleAddTaskToggle = () => {
        setIsAddTaskOpen(!isAddTaskOpen)
        setIsMenuOpen(false)
    }

    const handleEditProjectToggle = () => {
        setIsEditProjectOpen(!isEditProjectOpen)
        setIsAddTaskOpen(false)
        setIsMenuOpen(false)
    }

    return (
        <div className='md:w-[28vw] w-full max-h-[82vh] bg-[#CBE5FF] rounded-3xl p-4 relative'>

            {/* Project Details  */}
            <div className='w-full h-[30vh] bg-white rounded-3xl p-3'>
                <div className='flex w-full justify-between'>
                    <p className='text-gray-500'>July 19,2025</p>
                    {/* Menu Options  */}
                    <div className="relative">
                        <HiDotsVertical onClick={handleMenuToggle} className="cursor-pointer" />
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-[150px] bg-white border rounded-xl shadow-lg">
                                <ul className="text-sm">
                                    <div className='flex items-center p-2 gap-2 hover:bg-gray-100 cursor-pointer' onClick={handleEditProjectToggle}>
                                        <MdEdit />
                                        <li
                                            className=""
                                        >
                                            Edit
                                        </li>
                                    </div>
                                    <div className='flex items-center p-2 gap-2 hover:bg-gray-100 cursor-pointer'>
                                        <MdDelete />
                                        <li
                                        >
                                            Delete
                                        </li>
                                    </div>
                                    <div className='flex items-center p-2 gap-2 hover:bg-gray-100 cursor-pointer' onClick={handleAddTaskToggle}>
                                        <IoMdAddCircle />
                                        <li
                                        >
                                            Add Task
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <h3 className='text-center text-xl font-semibold my-6 px-3'>Web Designing In Mobile Development</h3>

                <p>Progress</p>
                <div className='w-full h-3 border-2 border-[#81DDF7] mt-4 rounded-xl flex items-center'>
                    <div className='w-[60%] h-3 bg-[#81DDF7] rounded-xl'>

                    </div>
                </div>
            </div>

            {/* Task Lists  */}
            <div className='w-full mt-4 max-h-[45vh] overflow-y-auto'>
                <Task />
                <Task />
                <Task />
            </div>

            {/* Add Task  */}
            {isAddTaskOpen ? <div className='absolute md:w-[26vw] w-[83vw] bg-white border-2 border-[#CBE5FF] top-4 left-4 p-4 rounded-3xl z-30'>
                <h2>Add Task</h2>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' id='title' placeholder='Add Title' className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' />
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor="assignTo" >Assign To</label>
                    <select name='assignTo' id='assignTo' className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' >
                        <option value='' >Select Member</option>
                        <option value='Devanshi' >Devanshi</option>
                        <option value='Saket' >Saket</option>
                    </select>
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor='deadline'>Deadline</label>
                    <input type="date" name='deadline' id='deadline' className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' />

                    <div className='flex mt-4 gap-3 justify-center'>
                        <button className='py-3 px-6 bg-[#CBE5FF] rounded-3xl'>Add Task</button>
                        <button className='py-3 px-6 bg-[#CBE5FF] rounded-3xl' onClick={handleAddTaskToggle}>Cancel</button>
                    </div>
                </div>

            </div> : ''}

            {/* Edit Project Details  */}
            {isEditProjectOpen ? <div className='absolute md:w-[26vw] w-[83vw] bg-white border-2 border-[#CBE5FF] top-4 left-4 p-4 rounded-3xl z-30'>
                <h2>Edit Project Details</h2>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="projName">Project Name</label>
                    <input type="text" name='projName' id='projName' placeholder='Project Name' className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' />
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor='deadline'>Deadline</label>
                    <input type="date" name='deadline' id='deadline' className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' />

                    <div className='flex mt-4 gap-3 justify-center'>
                        <button className='py-3 px-6 bg-[#CBE5FF] rounded-3xl'>Edit Project</button>
                        <button className='py-3 px-6 bg-[#CBE5FF] rounded-3xl' onClick={handleEditProjectToggle}>Cancel</button>
                    </div>
                </div>

            </div> : ''}
        </div>
    )
}

export default Project