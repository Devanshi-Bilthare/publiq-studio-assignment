import React from 'react'
import Project from '../Components/Project'
import Task from '../Components/Task'
import { HiDotsVertical } from "react-icons/hi";


const Projects = () => {
  return (
    <div className="w-full min-h-[90vh] mt-10 flex flex-wrap gap-10 justify-start items-start">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>

    </div>
  )
}

export default Projects