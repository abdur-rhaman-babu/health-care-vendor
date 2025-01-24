import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSeller = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const {data: isSeller} = useQuery({
    queryKey:[user?.email, 'isSeller'],
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/users/seller/${user.email}`)
        return res.data.seller;
    }
  })
  return [isSeller]
};

export default useSeller;
