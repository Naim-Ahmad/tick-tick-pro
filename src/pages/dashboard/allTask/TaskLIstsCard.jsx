import { Card, CardContent, Grid, List, Typography } from "@mui/material";
import useDNDDrop from "../../../hooks/dragAndDrop/useDNDDrop";
import TaskLists from "./TaskLists";

export default function TaskLIstsCard({ status, todo, ongoing, completed }) {
  
  const { drop, isOver } = useDNDDrop(status)

  return (
    <Grid key={status} item xs={12} md={6} lg={4}>
      {/* <Todo />
           */}

      <Card>
          <Typography sx={{bgcolor: status === 'completed' ? 'seagreen': status === 'ongoing' ? 'orange' : 'GrayText'}} px={2} py={1} textTransform="capitalize" variant="h5" fontWeight="bold" color={'white'} >
            {status}
          </Typography>

        <CardContent ref={drop}>
          <List style={isOver ? {background: 'lightGray'} : {}} dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
              status === 'todo'
                ? todo?.map(to => <TaskLists key={to?._id} labelId={to} data={to} />)

                : status === 'ongoing'

                  ? ongoing?.map(on => <TaskLists key={on?._id} labelId={on} data={on} />)

                  : completed?.map(com => <TaskLists key={com?._id} labelId={com} data={com} />)


            }

          </List>
        </CardContent>
      </Card>

    </Grid>
  )
}