import { EditOutlined } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Chip, IconButton, ListItem, ListItemButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import toast from 'react-hot-toast';
import DialogModal from '../../../components/DialogModal';
import useDNDDrag from '../../../hooks/dragAndDrop/useDNDDrag';
import useToggler from '../../../hooks/toggler/useToggler';
import useDeleteTask from '../../../hooks/useDeleteTask';

export default function TaskLists({ labelId, data }) {

  const { mutateAsync } = useDeleteTask()

  const [open, handleOpen] = useToggler()


  const { drag, isDragging } = useDNDDrag(data?._id)

  const handleDelete = async () => {
    // console.log(data?._id)
    try {
      await mutateAsync(data?._id)
      toast.success("Deleted Task")
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const chipColor = data?.priority === 'heigh'
    ? <Chip color="primary" sx={{ textTransform: 'capitalize' }} size='small' label={data?.priority} />
      : data?.priority === 'moderate'
      ? <Chip color="warning" sx={{ textTransform: 'capitalize' }} size='small' label={data?.priority} />
      : <Chip sx={{ textTransform: 'capitalize' }} size='small' label={data?.priority} />


// console.log(data)
  return (
    <>

      <DialogModal open={open} handleClose={handleOpen} id={data?._id} />
      <ListItem
        ref={drag}
        style={isDragging ? { opacity: 0.2 } : {}}
        secondaryAction={
          <>
            {/* <IconButton onClick={handleUpdate} edge="end" aria-label="comments">
            <Done />
          </IconButton>

          <IconButton onClick={handleOngoing} edge="end" aria-label="comments">
            <ArrowForward />
          </IconButton> */}
            <IconButton onClick={handleOpen} edge="end" aria-label="comments">
              <EditOutlined />
            </IconButton>
            <IconButton onClick={handleDelete} edge="end" aria-label="comments">
              <DeleteIcon />
            </IconButton>
          </>
        }
        disablePadding
      >

        <ListItemButton role={undefined} sx={{ display: 'flex' }} dense>
          <ListItemText sx={{ display: 'flex', textTransform: 'capitalize', fontWeight: 'bold', alignItems: 'center', gap: '8px' }} secondary={chipColor} id={labelId} primary={data?.taskTitle} />
        </ListItemButton>
      </ListItem>
    </>
  )
} 