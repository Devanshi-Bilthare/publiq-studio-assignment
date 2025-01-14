import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Task = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isEditTaskOpen, setIsEditTaskOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const handleEditTaskToggle = () => {
        setIsEditTaskOpen(!isEditTaskOpen)
        setIsMenuOpen(false)
    }

    return (
        <div className="w-full bg-white pt-3 rounded-2xl mt-3">
            <div className="flex gap-3 px-3 justify-between ">
                <h3 className="text-md">Create a preview for the last article from our blog.</h3>
                {/* Menu Options  */}
                <div className="relative">
                    <HiDotsVertical onClick={handleMenuToggle} className="cursor-pointer" />
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-[150px] bg-white border rounded-xl shadow-lg z-20">
                            <ul className="text-sm">
                                <div className='flex items-center p-2 gap-2 hover:bg-gray-100 cursor-pointer' onClick={handleEditTaskToggle}>
                                    <MdEdit />
                                    <li
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
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Task Full Details  */}
            <div
                className={`relative w-full bg-white rounded-b-2xl overflow-hidden transition-max-height duration-300 z-10 ${isOpen ? "max-h-56" : "max-h-0"
                    }`}
            >
                <div className="flex items-center mt-4 gap-2 px-3">
                    <div className="w-10 h-10 rounded-full bg-[#FEE4CB] flex justify-center items-center">
                        D
                    </div>
                    <p>July 04, 2024</p>
                </div>
                <p className="mt-3 text-green-600 px-3">In Progress</p>
            </div>

            {/* Collapse Arrow  */}
            <div
                onClick={toggleCollapse}
                className={`flex justify-center items-center cursor-pointer ${isOpen ? "z-10" : "z-0"
                    }`}
            >
                <RiArrowDropDownLine
                    className={`text-3xl rounded-bl-lg rounded-br-lg transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </div>

            {/* Edit Task Details  */}
            {isEditTaskOpen ? <div className='absolute w-[26vw] bg-white border-2 border-[#FBC5C7] top-4 left-4 p-4 rounded-3xl z-30'>
                <h2>Edit Task Details</h2>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' id='title' placeholder='Edit Title' className='p-2 rounded-xl mt-2 bg-[#FBC5C7]' />
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor="assignTo" >Assign To</label>
                    <select name='assignTo' id='assignTo' className='p-2 rounded-xl mt-2 bg-[#FBC5C7]' >
                        <option value='' >Select Member</option>
                        <option value='Devanshi' >Devanshi</option>
                        <option value='Saket' >Saket</option>
                    </select>
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor='deadline'>Deadline</label>
                    <input type="date" name='deadline' id='deadline' className='p-2 rounded-xl mt-2 bg-[#FBC5C7]' />

                    <div className='flex mt-4 gap-3 justify-center'>
                        <button className='py-3 px-6 bg-[#FBC5C7] rounded-3xl'>Add Task</button>
                        <button className='py-3 px-6 bg-[#FBC5C7] rounded-3xl' onClick={handleEditTaskToggle}>Cancel</button>
                    </div>
                </div>

            </div> : ''}
        </div>
    );
};

export default Task;
