import React from 'react'

const CreateTaskForm = () => {
  return (
    <div className="p-5 mt-7 rounded bg-[#1c1c1c] w-1/2">
    <form className="flex items-start justify-between">
      <div className="w-1/2">
        <h3>Task Title</h3>
        <input type="text" placeholder="Enter task title" />
        <div>
        <h3>Assign to</h3>
        <input type="text" placeholder="Enter employee name" />
      </div>
      <div>
        <h3>category</h3>
        <input type="text" placeholder="Enter Task description" />
      </div>
      </div>
      <div className="w-2/5">
      <div>
        <h3>Description</h3>
        <textarea
          placeholder="Enter description of task"
          required
        ></textarea>
          </div>
          <div>
          <button className="bg-emerald-500 text-sm font-bold rounded p-2">Create Task</button>
          </div>
      </div>
    </form>
    </div>
  )
}

export default CreateTaskForm