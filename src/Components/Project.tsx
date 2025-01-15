import { useEffect, useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import Task from './Task'
import { AppDispatch, RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { DeleteProject, EditProject } from '../features/Projects/ProjectSlice';
import { GetMembers } from '../features/Members/MemberSlice';
import { useSelector } from 'react-redux';
import { AddTasks, GetTasks } from '../features/Tasks/TaskSlice';

interface Project {
    id:string,
    projName: string;
    deadline: string;
    progress: number;
    tasks:string[]
  }
  
  interface ProjectDetailsProps {
    project: Project;
  }

const Project: React.FC<ProjectDetailsProps> = ({project}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
    const [isEditProjectOpen, setIsEditProjectOpen] = useState(false)
    const allMembers = useSelector((state:RootState) => state?.member?.members)
    const allTasks = useSelector((state:RootState) => state?.task?.tasks)
    const {memberDetail} = useSelector((state:RootState) => state?.member)
    const {taskDetail} = useSelector((state:RootState) => state?.task)
    const dispatch:AppDispatch = useDispatch()

    const projTasks = allTasks.filter((task) => task.projId === project.id)

    const [data,setData] = useState({
            id:project.id,
            projName: project.projName,
            deadline: project.deadline,
            progress:project.progress,
            tasks:project.tasks
    })

    const [taskData,setTaskData] = useState({
        title:'',
        deadline:'',
        assignTo:'',
        status:'To Do'
    })


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

    useEffect(() => {
        dispatch(GetMembers())
        dispatch(GetTasks())
    },[memberDetail,taskDetail])

    useEffect(() => {
        calculateProgress()
    },[allTasks])

    const calculateProgress = () => {
        const completedTasks = projTasks.filter((task) => task.status == "Completed")
        const progress = (completedTasks.length/projTasks.length)*100
        console.log(completedTasks.length,projTasks.length)
            dispatch(EditProject({...data,progress:progress}))

    }

    const deleteHandler = () => {
        dispatch(DeleteProject(project.id))
    }

    const changeHandler = ( e:any) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    }

    const handleSubmit = ( e:React.FormEvent) => {
        e.preventDefault()
        dispatch(EditProject(data))
        setIsEditProjectOpen(false)
    }

    const changeTaskHandler = (e:any) => {
        const { name, value } = e.target;
        setTaskData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    }

    const HandleTaskSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        const taskWithId = { ...taskData, id: new Date().toISOString(),projId:project.id }
        dispatch(AddTasks(taskWithId))

        const updatedProject = {
            ...data,
            tasks: [...data.tasks, taskWithId.id],
        };
    
        dispatch(EditProject(updatedProject));
        setTaskData({
            title: '',
            deadline: '',
            assignTo: '',
            status:'TO DO'
        });
        setIsAddTaskOpen(false);
        calculateProgress()
    }

    return (
        <div className='md:w-[28vw] w-full max-h-[82vh] bg-[#99B3FE] rounded-3xl p-4 relative'>

            {/* Project Details  */}
            <div className='w-full h-[30vh] bg-white rounded-3xl p-3'>
                <div className='flex w-full justify-between'>
                    <p className='text-gray-500'>{project.deadline}</p>
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
                                    <div className='flex items-center p-2 gap-2 hover:bg-gray-100 cursor-pointer'
                                    onClick={deleteHandler}
                                    >
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
                <h3 className='text-center text-xl font-semibold my-6 px-3'>{project.projName}</h3>

                <p>Progress</p>
                <div className=' w-full h-3 border-2 border-[#81DDF7] mt-4 rounded-xl flex items-center group'>
                <div style={{ width: `${project.progress}%` }} className="relative h-3 bg-[#81DDF7] rounded-xl">
                        <div className='absolute right-[-40px] bg-[#99B3FE] p-2 rounded-xl bottom-4 opacity-0 group-hover:opacity-100'>
                            {project.progress}%
                        </div>

                    </div>
                </div>
            </div>

            {/* Task Lists  */}
            <div className='w-full mt-4 max-h-[45vh] overflow-y-auto'>
               {projTasks?.map((task) => (
                <Task task={task} key={task.id}/>
               ))}
            </div>

            {/* Add Task  */}
            {isAddTaskOpen ? <form onSubmit={HandleTaskSubmit} className='absolute md:w-[26vw] w-[83vw] bg-white border-2 border-[#99B3FE] top-4 left-4 p-4 rounded-3xl z-30'>
                <h2>Add Task</h2>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' id='title' value={taskData.title} onChange={changeTaskHandler} placeholder='Add Title' className='p-2 rounded-xl mt-2 bg-[#99B3FE]' />
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor="assignTo" >Assign To</label>
                    <select name='assignTo' id='assignTo' value={taskData.assignTo} onChange={changeTaskHandler} className='p-2 rounded-xl mt-2 bg-[#99B3FE]' >
                        <option value='' >Select Member</option>
                        {allMembers.map(mem => (
                            <option value={mem.name} >{mem.name}</option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor='deadline'>Deadline</label>
                    <input type="date" name='deadline' value={taskData.deadline} onChange={changeTaskHandler} id='deadline' className='p-2 rounded-xl mt-2 bg-[#99B3FE]' />
                </div>
                    <div className='flex flex-col mt-3'>
                    <label htmlFor="status" >Status</label>
                    <select name='status' id='status' value={taskData?.status} onChange={changeTaskHandler} className='p-2 rounded-xl mt-2 bg-[#99B3FE]' >
                        <option value='To Do' >To Do</option>
                        <option value='IN Progress' >In Progress</option>
                        <option value='Completed' >Completed</option>
                        
                    </select>
                </div>

                    <div className='flex mt-4 gap-3 justify-center'>
                        <button className='py-3 px-6 bg-[#99B3FE] rounded-3xl'>Add Task</button>
                        <button className='py-3 px-6 bg-[#99B3FE] rounded-3xl' onClick={handleAddTaskToggle}>Cancel</button>
                    </div>
                

            </form> : ''}

            {/* Edit Project Details  */}
            {isEditProjectOpen ? <form onSubmit={handleSubmit} className='absolute md:w-[26vw] w-[83vw] bg-white border-2 border-[#99B3FE] top-4 left-4 p-4 rounded-3xl z-30'>
                <h2>Edit Project Details</h2>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="projName">Project Name</label>
                    <input type="text" name='projName' id='projName' value={data.projName} onChange={changeHandler} placeholder='Project Name' className='p-2 rounded-xl mt-2 bg-[#99B3FE]' />
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor='deadline'>Deadline</label>
                    <input type="date" name='deadline' id='deadline' value={data.deadline} onChange={changeHandler} className='p-2 rounded-xl mt-2 bg-[#99B3FE]' />

                    <div className='flex mt-4 gap-3 justify-center'>
                        <button type='submit' className='py-3 px-6 bg-[#99B3FE] rounded-3xl'>Edit Project</button>
                        <button className='py-3 px-6 bg-[#99B3FE] rounded-3xl' onClick={handleEditProjectToggle}>Cancel</button>
                    </div>
                </div>

            </form> : ''}
        </div>
    )
}

export default Project