import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "../config/axios.config";

export default function useUpdateTask() {

  const queryClient = useQueryClient()

  const {data, isPending, error, status, isError, isSuccess, mutate, mutateAsync} = useMutation({
    mutationKey: ["updateTask"],
    mutationFn: async (data)=>{
      const res = await axiosPublic.put(`/UpdateTask/${data.id}`, data?.data)
      return res.data;
    },
    onSuccess: ()=> queryClient.invalidateQueries(["myTasks"])
  })

  return {data, isPending, isError, error, status, isSuccess, mutate, mutateAsync}
}