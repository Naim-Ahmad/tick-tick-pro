import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useCreateTask from "../../../hooks/useCreateTask";
import Completed from "./Completed";
import Ongoing from "./Ongoing";
import Todo from "./Todo";


export default function Content() {
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };



  const { data, mutate, isSuccess, isError, error } = useCreateTask()

  const [task, setTask] = useState('')

  // console.log(data)

  const handleCreateTask = e => {
    const key = e.key;
    // console.dir(key)
    if (key === 'Enter') {
      // console.log(task)
      const taskInfo = {
        taskTitle: task,
      }
      mutate(taskInfo)
      setTask('')
    }
  }


  if (isError) {
    toast.error(error.message)
  }

  if (isSuccess && data?._id) {
    // console.log('first')
    toast.success('Todo Added')
   
  }


  return (
    <Box p={4}>
      <Toaster/>
      <Box>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>All Todos</Typography>
      </Box>

      <Box my={3}>
        <TextField
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder={`+ Add Task`} size='small'
          onKeyUp={handleCreateTask}
        />
      </Box>

      <Grid container spacing={3} mt={2}>

        <Grid item xs={12} md={6} lg={4}>
          <Todo />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Ongoing />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Completed />
        </Grid>

      </Grid>
    </Box>
  )
}