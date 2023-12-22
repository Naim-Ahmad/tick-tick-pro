import { Card, CardContent, Divider, List, Typography } from "@mui/material";
import { useDrag } from "react-dnd";
import { dragTypes } from "../../../config/dragTypes";
import useGetTask from "../../../hooks/useGetTask";
import TaskLists from "./TaskLists";

export default function Completed() {
  const { data = [] } = useGetTask('completed')
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dragTypes.task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  // console.log(data)

  return (

    <Card>
      <CardContent>
        <Typography variant="h4">
          Completed
        </Typography>
        <Divider />
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {
            data?.map((item, ind) => (
              <TaskLists key={item?._id} labelId={ind} data={item}/>
              // <ListItem
              //   key={item._id}
              //   ref={drag}
              //   secondaryAction={
              //     <Checkbox
              //       edge="end"
              //     />
              //   }
              //   disablePadding
              // >
              //   <ListItemButton>
              //     <ListItemText primary={item?.taskTitle} />
              //   </ListItemButton>
              // </ListItem>
            ))
          }
        </List>
      </CardContent>
    </Card>

  )
}