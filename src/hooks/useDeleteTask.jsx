import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "../config/axios.config";

export default function useDeleteTask() {

  const queryClient = useQueryClient()

  const {data, isPending, error, status, isError, mutate} = useMutation({
    mutationKey: ["deleteTask"],
    mutationFn: async (id)=>{
      const res = await axiosPublic.delete(`/deleteTask/${id}`)
      return res.data;
    },
    onSuccess: ()=> queryClient.invalidateQueries(['myTasks'])
  })

  return {data, isPending, isError, error, status, mutate}
}