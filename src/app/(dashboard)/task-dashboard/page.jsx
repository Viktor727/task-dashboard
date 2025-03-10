'use client'

// React Imports
import { useState } from 'react'

// Component Imports
import TaskForm from '@/components/tasks/TaskForm'
import TaskExisting from '@/components/tasks/TaskExisting'

export default function Page() {
  const [tasks, setTasks] = useState([])
  const [taskType, setTaskType] = useState('Todo Task')
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const handleCreateTask = () => {
    if (taskTitle.trim() === '' || taskDescription.trim() === '') return
    const newTask = { type: taskType, title: taskTitle, description: taskDescription }

    setTasks([...tasks, newTask])
    setTaskTitle('')
    setTaskDescription('')
  }

  const handleDeleteTask = index => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className='flex flex-col gap-10'>
        <TaskForm
          taskType={taskType}
          setTaskType={setTaskType}
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          handleCreateTask={handleCreateTask}
        />

        <TaskExisting tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </div>
    </>
  )
}
