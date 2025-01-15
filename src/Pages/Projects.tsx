import React, { useEffect } from 'react'
import Project from '../Components/Project'
import Task from '../Components/Task'
import { HiDotsVertical } from "react-icons/hi";
import { AppDispatch, RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { GetProjects } from '../features/Projects/ProjectSlice';
import { useSelector } from 'react-redux';


const Projects = () => {
  const dispatch:AppDispatch = useDispatch()
  const allProjects = useSelector((state:RootState) => state?.project?.projects)
  const {projectDetail} = useSelector((state:RootState) => state?.project)

  useEffect(() => {
    dispatch(GetProjects())
  },[projectDetail])
  return (
    <div className="w-full min-h-[90vh] mt-10 flex flex-wrap gap-10 justify-start items-start">
        {
          allProjects?.map((proj) => (
            <Project project={proj} key={proj.id}/>
          ))
        }

    </div>
  )
}

export default Projects