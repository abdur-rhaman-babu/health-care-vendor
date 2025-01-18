import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSellerManage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: medicines = [] } = useQuery({
    queryKey: ["medicine", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/medicine?email=${user.email}`);
      return res.data;
    },
  });
  return [medicines]
};

export default useSellerManage;
