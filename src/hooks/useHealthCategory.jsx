import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";


const useHealthCategory = () => {
   const {category} = useParams()
   const axiosPublic = useAxiosPublic();
   const {data: medicines=[]} = useQuery({
        queryKey:['medicines', category],
        queryFn: async ()=>{
           const res = await axiosPublic.get(`/medicine/${category}`)
           return res.data
        },
   })
   return [medicines]
};

export default useHealthCategory;