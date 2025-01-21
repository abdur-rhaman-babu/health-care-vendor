import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";
import CartCard from "./CartCard";
const Cart = () => {
  const [carts, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const handleClearAllItem = async () => {
    const res = await axiosSecure.delete("/carts");
    // console.log(res.data)
    if (res.data.deletedCount > 0) {
      toast.success("Clear All item form cart");
      refetch();
    }
  };

  const totalPrice = carts.reduce((acc, curr)=> acc + curr.price,0);

  return (
    <div>
      <div className="md:flex justify-between items-center">
        <button
          onClick={handleClearAllItem}
          className="p-2 bg-red-600 font-bold text-xl text-white"
        >
          Clear all data
        </button>
        <p className="font-bold text-xl">Total:{carts.length}</p>
        <p className="font-bold text-xl">Total Price:{totalPrice}</p>
        <button
          onClick={handleClearAllItem}
          className="p-2 bg-[#058789] font-bold text-xl text-white"
        >
          Pay
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {carts.map((item) => (
          <CartCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
