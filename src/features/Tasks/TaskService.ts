import axios from "axios";
import { base_url } from "../../utils/baseUrl";

interface Task {
    id:string,
    title: string;
    deadline: string;
    assignTo: string;
    status:string;
    projId:string;
  }


const AddTasks = async (data:Task): Promise<Task> => {
    const res = await axios.post(`${base_url}/tasks`,data)
    return res.data 
}

const GetTasks = async (): Promise<Task[]> => {
    const res = await axios.get(`${base_url}/tasks`)
    return res.data
}

const EditTask = async (data:Task): Promise<Task> => {
    const res = await axios.put(`${base_url}/tasks/${data.id}`,data)
    return res.data
}


const DeleteTask = async (id:string): Promise<Task> => {
    const res = await axios.delete(`${base_url}/tasks/${id}`)
    return res.data
}

const TaskService = {AddTasks,GetTasks,EditTask,DeleteTask}

export default TaskService