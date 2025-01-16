import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMedicines = () => {
  const axiosPublic = useAxiosPublic();
  const {data: medicines=[], refetch} = useQuery({
    queryKey:['menu'],
    queryFn: async ()=>{
        const res = await axiosPublic.get('/medicines')
        return res.data;
    }
  })
  return [medicines, refetch]
};

export default useMedicines;
