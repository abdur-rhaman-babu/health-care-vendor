import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';

const useCategory = () => {
    const axiosSecure = useAxiosSecure()
    const {data: categories=[], refetch} = useQuery({
        queryKey:['category'],
        queryFn: async ()=>{
            const res =  await axiosSecure.get('/categories')
            return res.data;
        }
    })
    return [categories, refetch]
};

export default useCategory;