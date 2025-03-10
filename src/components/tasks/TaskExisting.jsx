import { TextField, Button, MenuItem } from '@mui/material'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

export default function TaskExisting({tasks, handleDeleteTask}) {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
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
            Existing tasks
          </Typography>
          <Divider aria-hidden='true' sx={{ maxWidth: '552px' }} />
        </div>
        <div className='flex flex-col gap-6'>
          {tasks.map((task, index) => (
            <div
              key={index}
              className='self-stretch px-6 pt-6 pb-4 border-b border-gray-300 rounded-md shadow-md bg-white flex justify-between items-start'
            >
              <div className='flex flex-col gap-2'>
                <div className='px-2.5 py-1 bg-gray-500 text-white text-sm font-medium rounded'>{task.type}</div>
                <div className='text-lg font-medium text-gray-900'>{task.title}</div>
                <div className='text-sm text-gray-600'>{task.description}</div>
              </div>
              <Button variant='contained' color='secondary' onClick={() => handleDeleteTask(index)}>
                Delete Task
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
