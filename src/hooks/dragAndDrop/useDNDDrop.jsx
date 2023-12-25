import { useDrop } from "react-dnd"
import toast from "react-hot-toast"
import { dragTypes } from "../../config/dragTypes"
import useUpdateTask from "../useUpdateTask"

export default function useDNDDrop(status) {

  const {mutateAsync} = useUpdateTask()

  const [{isOver}, drop] = useDrop(() => ({
    accept: dragTypes.task,
    drop: (draggedItem)=> updateData(draggedItem),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  async function updateData(item){
    // console.log(item)
    try {
     await mutateAsync({ id: item?.id, data: { status: status } })
     toast.success(`Task Added to ${status}`)
    
   } catch (error) {
    console.log(error)
    toast.error('Something is wrong!')
   }
  }

  return {isOver, drop}
}