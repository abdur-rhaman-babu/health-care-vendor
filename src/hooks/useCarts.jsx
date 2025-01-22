import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });
  return [carts, refetch]
};

export default useCarts;
