import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";
import CartCard from "./CartCard";
const Cart = () => {
  const [carts, refetch] = useCarts();
  const axiosSecure = useAxiosSecure()
  const handleClearAllItem = async () =>{
    const res = await axiosSecure.delete('/carts')
    console.log(res.data)
    if(res.data.deletedCount > 0){
      toast.success('Clear All item form cart')
      refetch()
    }
  }

  return (
    <div>
      <button onClick={handleClearAllItem} className="p-2 bg-red-600 font-bold text-xl text-white">Clear all data</button>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {carts.map((item) => (
          <CartCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
