import { ArrowForward, Done } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, ListItem, ListItemButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import useDeleteTask from '../../../hooks/useDeleteTask';
import useUpdateTask from '../../../hooks/useUpdateTask';

export default function TaskLists({ labelId, data }) {

  // const [checked, setChecked] = useState([0]);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  // console.log(checked)

  const { mutate } = useDeleteTask()

  const { mutate: updateTask } = useUpdateTask()


  const handleDelete = () => {
    // console.log(data?._id)
    mutate(data?._id)
  }

  const handleUpdate = () => {
    updateTask({ id: data?._id, data: { status: 'completed' } })
  }

  const handleOngoing = () => {
    updateTask({ id: data?._id, data: { status: 'ongoing' } })
  }


  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton onClick={handleUpdate} edge="end" aria-label="comments">
            <Done />
          </IconButton>

          <IconButton onClick={handleOngoing} edge="end" aria-label="comments">
            <ArrowForward />
          </IconButton>

          <IconButton onClick={handleDelete} edge="end" aria-label="comments">
            <DeleteIcon />
          </IconButton>
        </>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        {/* <ListItemIcon>
          <Checkbox
            edge="start"
            // checked={checked.indexOf(data) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon> */}
        <ListItemText id={labelId} primary={data?.taskTitle} />
      </ListItemButton>
    </ListItem>
  )
}