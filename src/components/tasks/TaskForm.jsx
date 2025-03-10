
import { TextField, Button, MenuItem } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function TaskForm({taskType, setTaskType, taskTitle, setTaskTitle, taskDescription, setTaskDescription, handleCreateTask}) {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <Typography
            sx={{
              fontSize: '32px', // text-[32px]
              fontWeight: 500, // font-medium
              fontFamily: 'Public Sans, sans-serif', // font-['Public_Sans']
              lineHeight: '44px' // leading-[44px]
            }}
            color='text.primary'
          >
            Task Dashboard
          </Typography>
          <Typography
            variant='h5'
            sx={{
              fontSize: '18px', // text-lg
              fontWeight: 400, // font-normal
              fontFamily: 'Public Sans, sans-serif', // font-['Public_Sans']
              lineHeight: '28px' // leading-7
            }}
            color='text.primary'
          >
            All open tasks across dashboards
          </Typography>
        </div>
        <div className='px-6 pt-5 pb-6 bg-white rounded-md shadow-md flex flex-col gap-4'>
          <div className='text-gray-400 text-sm'>Task Type</div>
          <TextField
            select
            fullWidth
            variant='outlined'
            value={taskType}
            onChange={e => setTaskType(e.target.value)}
            className='bg-white rounded-md'
          >
            <MenuItem value='Todo Task'>Todo Task</MenuItem>
            <MenuItem value='In Progress'>In Progress</MenuItem>
            <MenuItem value='Completed'>Completed</MenuItem>
          </TextField>

          <div className='text-gray-400 text-sm'>Task Title</div>
          <TextField
            fullWidth
            variant='outlined'
            placeholder='Task title'
            value={taskTitle}
            onChange={e => setTaskTitle(e.target.value)}
            className='bg-white rounded-md'
          />

          <div className='text-gray-400 text-sm'>Task Description</div>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant='outlined'
            placeholder='Task Description'
            value={taskDescription}
            onChange={e => setTaskDescription(e.target.value)}
            className='bg-white rounded-md'
          />

          <div>
            <Button variant='contained' color='primary' className='mt-4' onClick={handleCreateTask}>
              Create Task
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
