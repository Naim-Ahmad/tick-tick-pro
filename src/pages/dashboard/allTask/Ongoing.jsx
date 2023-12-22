import { Card, CardContent, Divider, List, Typography } from "@mui/material";
import { useDrag } from "react-dnd";
import { dragTypes } from "../../../config/dragTypes";
import useGetTask from "../../../hooks/useGetTask";
import TaskLists from "./TaskLists";

export default function Ongoing() {

  const { data = [] } = useGetTask('ongoing')
  // console.log(data)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dragTypes.task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <Card bgcolor="white">
      <CardContent>
        <Typography variant="h4">
          On Going
        </Typography>
        <Divider />
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {
            data?.map((item, ind) => (
              <TaskLists key={item?._id} labelId={ind} data={item} />
            ))
          }
        </List>
      </CardContent>
    </Card>
  )
}