import axios from "axios";
import { base_url } from "../../utils/baseUrl";

interface Project {
    id:string,
    projName: string;
    deadline: string;
    progress: Number;
    tasks:string[]
  }


const AddProjects = async (data:Project): Promise<Project> => {
    const res = await axios.post(`${base_url}/projects`,data)
    return res.data 
}

const GetProjects = async (): Promise<Project[]> => {
    const res = await axios.get(`${base_url}/projects`)
    return res.data
}

const EditProject = async (data:Project): Promise<Project> => {
    const res = await axios.put(`${base_url}/projects/${data.id}`,data)
    return res.data
}


const DeleteProject = async (id:string): Promise<Project> => {
    const res = await axios.delete(`${base_url}/projects/${id}`)
    return res.data
}

const ProjectService = {AddProjects,GetProjects,EditProject,DeleteProject}

export default ProjectService