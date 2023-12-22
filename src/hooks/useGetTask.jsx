import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../config/axios.config";

export default function useGetTask(value) {

  const {data, isPending, error, status, isError, refetch} = useQuery({
    queryKey: ["myTasks", {value}],
    queryFn: async ()=>{
      const url = value ? `/myTasks?status=${value}`: '/myTasks'
      const res = await axiosPublic.get(url)
      return res.data;
    }
  })

  return {data, isPending, isError, error, status, refetch}
}