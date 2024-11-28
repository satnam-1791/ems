import React from 'react'
import Header from '../common/Header'
import TaskListNumber from '../common/TaskListNumber'
import Tasklist from '../Task/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <TaskListNumber/>
      <Tasklist/>
        </div>
        </div>
  )
}

export default EmployeeDashboard