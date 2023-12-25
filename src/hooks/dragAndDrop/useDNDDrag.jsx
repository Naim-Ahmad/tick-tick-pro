import { useDrag } from "react-dnd"
import { dragTypes } from "../../config/dragTypes"

export default function useDNDDrag(id) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dragTypes.task,
    item: {id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return {isDragging, drag}
}