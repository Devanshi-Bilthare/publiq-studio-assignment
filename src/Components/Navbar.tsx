import  { useEffect, useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import Teams from '../Pages/Teams';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { AddProjects } from '../features/Projects/ProjectSlice';
import { GetMembers } from '../features/Members/MemberSlice';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [isMemberOpen,setIsMemberOpen] = useState(false)
    const dispatch:AppDispatch = useDispatch()
    const {memberDetail} = useSelector((state:RootState) => state.member)
    const allMembers = useSelector((state: RootState) => state?.member?.members)
    
    const [data,setData] = useState({
        projName: '',
        deadline: '',
        progress:0,
        tasks:[""]
    })

    const handleOpenToggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect (() => {
        dispatch(GetMembers())
    },[memberDetail])

    const handleMemberToggle = () => {
        setIsMemberOpen(!isMemberOpen)
    }

    const changeHandler = (e:any) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    }

    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault()
        const dataWithId = { ...data, id: new Date().toISOString() }
        dispatch(AddProjects(dataWithId))
        setData({
            projName: '',
            deadline: '',
            progress:0,
            tasks:[""]
        })

        setIsOpen(false)
    }

  return (
    <div className='flex justify-between items-center w-full py-2'>
        <div className='flex items-center'>
        
        {/* Add Project Button  */}
        <IoIosAddCircle className='md:w-16 md:h-16 w-12 h-12 text-[#99B3FE]' onClick={handleOpenToggle} />

        {/* Search Bar  */}
        <div className='md:w-[30vw] h-12 md:border-2 rounded-3xl md:ms-4 flex items-center ps-2'>
        
        <CiSearch  className='w-8 h-8 ' />
        </div>
        </div>

        {/* Member Name Initials  */}
        <div className='flex'>
            
           {
            allMembers.map((mem,idx) => (
                idx < 3 ? <div className='ms-[-15px] w-10 h-10 rounded-full border-2 border-[#FBC5C7] bg-[#FFD3E2] flex justify-center items-center'>{mem?.name?.slice(0,1).toUpperCase()}</div> : ''
            ))
           }
            
            <div className='ms-[-15px] w-10 h-10 text-2xl rounded-full bg-[#99B3FE] flex justify-center items-center cursor-pointer' onClick={handleMemberToggle}>+</div>
        </div>

        {/* Add Project Form  */}
        {isOpen ? <form onSubmit={submitHandler} className='absolute w-[26vw] bg-white border-2 border-[#99B3FE] top-4 left-28 p-4 rounded-3xl z-30'>
                <h2>Add Project</h2>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="projName">Project Name</label>
                    <input type="text" name='projName' value={data.projName} onChange={changeHandler} id='projName' placeholder='Project Name' className='p-2 rounded-xl mt-2 bg-[#99B3FE]' />
                </div>

                <div className='flex flex-col mt-3'>
                    <label htmlFor='deadline'>Deadline</label>
                    <input type="date" name='deadline' value={data.deadline} onChange={changeHandler} id='deadline' className='p-2 rounded-xl mt-2 bg-[#99B3FE]' />

                    <div className='flex mt-4 gap-3 justify-center'>
                        <button type='submit' className='py-3 px-6 bg-[#99B3FE] rounded-3xl'>Add Project</button>
                        <button className='py-3 px-6 bg-[#99B3FE] rounded-3xl' onClick={handleOpenToggle}>Cancel</button>
                    </div>
                </div>

            </form> : ''}

        {/* Team Component  */}
        {isMemberOpen ? <Teams/> : ''}

        {/* Back Button  */}
           {isMemberOpen ?  <p className='md:w-14 md:h-14 w-12 h-12 bg-[#99B3FE] fixed z-40 flex text-3xl gap-2 items-center justify-center cursor-pointer rounded-full text-white' onClick={handleMemberToggle}><IoIosArrowBack /></p> : ''}
    </div>
  )
}

export default Navbar