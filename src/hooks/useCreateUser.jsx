import { useMutation } from "@tanstack/react-query";
import axiosPublic from "../config/axios.config";

export default function useCreateUser() {

  const {data, isPending, error, status, isError, mutate} = useMutation({
    mutationKey: ["createUser"],
    mutationFn: async (data)=>{
      const res = await axiosPublic.post('/createUser', data)
      return res.data;
    }
  })

  return {data, isPending, isError, error, status, mutate}
}