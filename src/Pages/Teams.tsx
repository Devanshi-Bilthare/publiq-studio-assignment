import  { useState } from 'react'
import MemberDetails from '../Components/MemberDetails'
import { useDispatch } from 'react-redux'
import { AddMembers} from '../features/Members/MemberSlice'
import { AppDispatch, RootState } from '../store/store'
import { useSelector } from 'react-redux'


const Teams = () => {
    const dispatch: AppDispatch = useDispatch()
    const allMembers = useSelector((state: RootState) => state?.member?.members)
    const [data,setData] = useState({
        name:"",
        email:"",
        role:""
    })

    const changeHandler = (e: any) => {
        const { name, value } = e.target;
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const submitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        const memberWithId = { ...data, id: new Date().toISOString() };
       dispatch(AddMembers(memberWithId))
        setData({
          name: '',
          email: '',
          role: '',
        });
      };

    return (
        <div
            className="fixed w-full h-[100vh] z-30 top-0 left-0 overflow-hidden flex flex-col items-center items-start"
            style={{ backgroundColor: "rgba(248, 250, 252, 0.7)" }}
        >
            {/* Add member form  */}
            <form onSubmit={submitHandler} className='w-[80vw] bg-[#99B3FE] mt-16 p-3 rounded-3xl md:flex gap-10'>
                <div className='w-full flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter Team Member Name' className='p-2 rounded-xl' onChange={changeHandler} value={data.name}
                    />
                </div>
                <div className='w-full flex flex-col '>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter Team Member Email' className='p-2 rounded-xl' onChange={changeHandler} value={data.email}  />
                </div>
                <div className='w-full flex flex-col'>
                    <label htmlFor="role">Role</label>
                    <input type="text" name='role' placeholder='Enter Team Member Role' className='p-2 rounded-xl' onChange={changeHandler} value={data.role}  />
                </div>
                <div className='mt-6 flex justify-center md:w-[30vw] '>
                    <button type='submit' className='p-2 bg-white rounded-xl'>Add Member</button>
                </div>
            </form>

            {/* member list  */}
            <div className='w-[80vw] p-3 bg-[#99B3FE] rounded-3xl mt-10 overflow-y-auto'>
                {allMembers?.map((member) => {
                    return <MemberDetails key={member.id} member={member} />
                })}

            </div>

        </div>
    )
}

export default Teams