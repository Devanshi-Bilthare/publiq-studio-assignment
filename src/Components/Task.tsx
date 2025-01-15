import React, { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { DeleteTask, EditTask } from "../features/Tasks/TaskSlice";
import { useSelector } from "react-redux";

interface Task {
    id: string; 
    title:string,
    assignTo:string,
    deadline:string,
    status:string,
    projId:string
  }

  interface TaskProps {
    task:Task
  }

const Task: React.FC<TaskProps> = ({task}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isEditTaskOpen, setIsEditTaskOpen] = useState(false)
    const allMembers = useSelector((state:RootState) => state?.member?.members)
    const dispatch:AppDispatch = useDispatch()


    const [data,setData] = useState({
        id:task.id,
        title: task.title,
        assignTo: task.assignTo,
        deadline: task.deadline,
        status: task.status,
        projId:task.projId
    })

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

    const changeHandler = (e:any) =>{
        const {name,value} = e.target
        setData((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        dispatch(EditTask(data))
        setIsEditTaskOpen(false)
    }


    const deleteHandler = () => {
        dispatch(DeleteTask(task.id))
        setIsMenuOpen(false)
    }


    return (
        <div className="w-full bg-white pt-3 rounded-2xl mt-3">
            <div className="flex gap-3 px-3 justify-between ">
                <h3 className="text-md">{data?.title}</h3>
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
                                <div className='flex items-center p-2 gap-2 hover:bg-gray-100 cursor-pointer' onClick={deleteHandler}>
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
                    <div className="w-10 h-10 rounded-full bg-[#FBC5C7] flex justify-center items-center">
                        {data?.assignTo?.slice(0,1).toUpperCase()}
                    </div>
                    <p>{data?.deadline}</p>
                </div>
                <p className="mt-3 text-green-600 px-3">{data?.status}</p>
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
            {isEditTaskOpen ? <form onSubmit={handleSubmit} className='absolute md:w-[26vw] w-[83vw]  bg-white border-2 border-[#CBE5FF] top-4 left-4 p-4 rounded-3xl z-30'>
                <h2>Edit Task Details</h2>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' id='title' value={data.title} onChange={changeHandler} placeholder='Edit Title' className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' />
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor="assignTo" >Assign To</label>
                    <select name='assignTo' id='assignTo' value={data?.assignTo} onChange={changeHandler} className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' >
                        <option value='' >Select Member</option>
                        {allMembers?.map(mem => (
                            <option value={mem.name} >{mem.name}</option>
                        ))}
                    </select>
                </div>
                

                <div className='flex flex-col mt-3'>
                    <label htmlFor='deadline'>Deadline</label>
                    <input type="date" name='deadline' value={data.deadline} onChange={changeHandler} id='deadline' className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' />
                    </div>

                    <div className='flex flex-col mt-3'>
                    <label htmlFor="status" >Status</label>
                    <select name='status' id='status' value={data?.status} onChange={changeHandler} className='p-2 rounded-xl mt-2 bg-[#CBE5FF]' >
                        <option value='To Do' >To Do</option>
                        <option value='IN Progress' >In Progress</option>
                        <option value='Completed' >Completed</option>
                        
                    </select>
                </div>


                    <div className='flex mt-4 gap-3 justify-center'>
                        <button type="submit" className='py-3 px-6 bg-[#CBE5FF] rounded-3xl'>Edit Task</button>
                        <button className='py-3 px-6 bg-[#CBE5FF] rounded-3xl' onClick={handleEditTaskToggle}>Cancel</button>
                    </div>
               

                
            </form> : ''}
        </div>
    );
};

export default Task;
