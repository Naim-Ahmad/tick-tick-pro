import { AddTask } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Toaster } from "react-hot-toast";
import DialogModal from "../../../components/DialogModal";
import useToggler from "../../../hooks/toggler/useToggler";
import useGetTask from "../../../hooks/useGetTask";
import TaskLIstsCard from "./TaskLIstsCard";


export default function Content() {

  const [open, setOpen] = useToggler()

  const { data = [] } = useGetTask()

  // console.log(data)

  const todo = data.filter(item => item.status === 'todo')
  const ongoing = data.filter(item => item.status === 'ongoing')
  const completed = data.filter(item => item.status === 'completed')

  // console.log(ongoing)


  return (
    <Box p={4}>
      <Toaster />
      <Box>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>All Todos</Typography>
      </Box>

      <Box my={3} textAlign="center">
        {/* <TextField
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder={`+ Add Task`} size='small'
          onKeyUp={handleCreateTask}
        /> */}
        <Button variant="contained" onClick={setOpen} >
          <AddTask style={{ marginRight: '10px' }} /> Add Task</Button>
        <DialogModal open={open} handleClose={setOpen} />
      </Box>

      <Grid container spacing={3} mt={2}>

        {["todo", "ongoing", "completed"].map(status => <TaskLIstsCard 
        key={status} 
        status={status} 
        completed={completed} 
        todo={todo} 
        ongoing={ongoing} />)}



        {/* <Grid item xs={12} md={6} lg={4}>
          <completed />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Completed />
        </Grid> */}

      </Grid>
    </Box>
  )
}