import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axiosPublic from '../config/axios.config';
import useCreateTask from '../hooks/useCreateTask';
import useUpdateTask from '../hooks/useUpdateTask';

export default function DialogModal({ open, handleClose, id }) {

  const { register, handleSubmit, reset } = useForm()

  const [value, setValue] = React.useState('low')

  const { mutateAsync } = useCreateTask()

  const { mutateAsync: updateTaskData } = useUpdateTask()

  const [taskData, setTaskData] = React.useState({})

  React.useEffect(() => {
    if (id) {

      axiosPublic.get(`/myTask/${id}`)
        .then(res => setTaskData(res.data))
    }
  }, [])

  // console.log(taskData)

  const handleCreateTask = async data => {
    console.log(data)
    try {
      await mutateAsync(data)
      toast.success('Task Added!')
      reset()
      handleClose()
    } catch (error) {
      toast.error(error.message)
    }

  }

  const updateTask = async (data) => {
    try {
      await updateTaskData({ id, data })
      toast.success('Task updated!')
      reset()
      handleClose()
    } catch (error) {
      toast.error(error.message)
    }
  }

  const date = taskData?.taskDeadLine?.substring(0, 10)

  // console.log(taskData?.taskDeadLine?.substring(0, 10))

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {!id ? "Add Task" : 'Update Task'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex' }}>

            <Box mb={2}>
              <TextField
                defaultValue={id && taskData?.taskTitle}
                {...register('taskTitle')}
                required
                label="Title"
                fullWidth
                variant="filled" />


              <TextField defaultValue={id && taskData?.taskDescription} {...register('taskDescription')} label="description" fullWidth variant="filled" />

              <FormControl fullWidth variant="filled" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  {...register('priority')}
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  defaultValue={id && taskData?.priority}

                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="moderate">Moderate</MenuItem>
                  <MenuItem value="heigh">Heigh</MenuItem>
                </Select>
              </FormControl>
              <TextField defaultValue={id && date} {...register('taskDeadLine')} type='date' fullWidth variant="filled" />
            </Box>
          </Box>
          {!id ? <Button onClick={handleSubmit(handleCreateTask)} variant='contained' autoFocus>
            Create Task
          </Button> : <Button onClick={handleSubmit(updateTask)} variant='contained' autoFocus>
            Update Task
          </Button>}
        </DialogContent>

      </Dialog>
    </React.Fragment>
  );
}

