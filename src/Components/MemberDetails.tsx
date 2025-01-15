import  { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { DeleteMember, EditMember } from '../features/Members/MemberSlice';

interface Member {
    id: string;
    name: string;
    email: string;
    role: string;
  }
  
  interface MemberDetailsProps {
    member: Member;
  }

const MemberDetails : React.FC<MemberDetailsProps> = ({member}) => {
    const dispatch:AppDispatch = useDispatch()
    const [isOpen,setIsOpen] = useState(false)
     const [data,setData] = useState({
        id:member.id,
            name:member?.name || "",
            email:member?.email || "",
            role:member?.role || ""
        })

    const handleEditToggle = ()=> {
        setIsOpen(!isOpen)
    }

    const deleteHandler = () =>{
        dispatch(DeleteMember(member.id))
    }

    const changeHandler = (e: any) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

    const editHandler = (e:React.FormEvent) => {
         e.preventDefault();
        dispatch(EditMember(data))
        setIsOpen(false)
    }

  return (
    <div className='mb-3 w-full p-2 bg-white rounded-xl flex flex-col md:flex-row justify-between items-center'>
    
    {/* Member Details  */}
    <div className='flex flex-col md:flex-row gap-4 items-center '>
    <div className='w-16 h-16 rounded-full border-2 border-[#FBC5C7] bg-[#FFD3E2] flex justify-center items-center text-xl shrink-0'>{member.name.slice(0,1).toLocaleUpperCase()}</div>
    <div className='text-center md:text-start'>
        <h2>{member.name}</h2>
        <p>{member.email}</p>
        <h3>{member.role}</h3>
    </div>
    </div>

    {/* Action Buttons  */}
    <div className='flex gap-3 mt-3'>
        <button  className='md:py-3 py-2 px-6 bg-[#99B3FE] rounded-3xl flex items-center gap-3' onClick={handleEditToggle}><MdEdit /> Edit</button>
        <button className='md:py-3 px-6 bg-[#99B3FE] rounded-3xl flex items-center gap-3' onClick={deleteHandler}><MdDelete /> Delete</button>

    </div>

    {/* Edit Member Form  */}
    {isOpen ?  <form onSubmit={editHandler} className='absolute top-[20vh] md:left-[30vw] md:w-[40vw] lg:w-[30vw] w-[80vw] md:bg-[#99B3FE] bg-white p-6 rounded-3xl gap-10 border-2 border-[#99B3FE]'>
        <h2 className='text-center text-xl'>Edit Member Detail</h2>
            <div className='w-full flex flex-col'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' value={data.name} onChange={changeHandler} placeholder='Enter Team Member Name' required className='p-2 rounded-xl md:bg-white bg-[#99B3FE]' />
            </div>
            <div className='w-full flex flex-col '>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' value={data.email} onChange={changeHandler} placeholder='Enter Team Member Email' className='p-2 rounded-xl md:bg-white bg-[#99B3FE]'/>
            </div>
            <div className='w-full flex flex-col'>
                <label htmlFor="role">Role</label>
                <input type="text" name='role' value={data.role} onChange={changeHandler} placeholder='Enter Team Member Role' className='p-2 rounded-xl md:bg-white bg-[#99B3FE]'/>
            </div>
           <div className='mt-6 flex justify-center gap-3'>
           <button type='submit' className='p-2 rounded-xl md:bg-white bg-[#99B3FE]'>Edit Member</button>
           <button className='p-2 rounded-xl md:bg-white bg-[#99B3FE]' onClick={handleEditToggle}>Cancel</button>

           </div>
        </form> : ''}
</div> 
  )
}

export default MemberDetails