import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";
import CartCard from "./CartCard";
import Swal from "sweetalert2";
const Cart = () => {
  const [carts, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const handleClearAllItem = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to clear this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete("/carts");
        // console.log(res.data)
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Cleared!",
            text: "Clear all data.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  const totalPrice = carts.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <div className="md:flex justify-between items-center">
        <button
          onClick={handleClearAllItem}
          className="p-2 bg-[#ef4444] font-bold text-xl text-white"
        >
          Clear all data
        </button>
        <p className="font-bold text-xl">Total: {carts.length}</p>
        <p className="font-bold text-xl">Total Price: ${totalPrice}</p>
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
