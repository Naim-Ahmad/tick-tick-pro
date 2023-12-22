import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "../config/axios.config";

export default function useCreateTask() {

  const queryClient = useQueryClient()

  const {data, isPending, error, status, isError, isSuccess, mutate} = useMutation({
    mutationKey: ["createUser"],
    mutationFn: async (data)=>{
      const res = await axiosPublic.post('/createTask', data)
      return res.data;
    },
    onSuccess: ()=> queryClient.invalidateQueries(["myTasks"])
  })

  return {data, isPending, isError, error, status, isSuccess, mutate}
}