import axios from "axios";
import { base_url } from "../../utils/baseUrl";

interface Member {
    id:string,
    name: string;
    email: string;
    role: string;
  }
  
  interface MemberResponse {
    id: string;
    name: string;
    email: string;
    role: string;
  }


const AddMembers = async (data:Member): Promise<MemberResponse> => {
    const res = await axios.post(`${base_url}/members`,data)
    return res.data 
}

const GetMembers = async (): Promise<MemberResponse[]> => {
    const res = await axios.get(`${base_url}/members`)
    return res.data
}

const EditMember = async (data:Member): Promise<MemberResponse> => {
    const res = await axios.put(`${base_url}/members/${data.id}`,data)
    return res.data
}


const DeleteMember = async (id:string): Promise<MemberResponse> => {
    const res = await axios.delete(`${base_url}/members/${id}`)
    return res.data
}

const MemberService = {AddMembers,GetMembers,EditMember,DeleteMember}

export default MemberService