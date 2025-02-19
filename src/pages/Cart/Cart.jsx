import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";
import CartCard from "./CartCard";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Cleared!",
            text: "All items have been removed.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  const totalPrice = carts.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="lg:container px-2">
      <Helmet>
        <title>Healthcare || Cart</title>
      </Helmet>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 rounded-lg bg-white">
        <button
          onClick={handleClearAllItem}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-md transition duration-300"
        >
          Clear all data
        </button>
        <p className="font-bold text-lg">Total Items: {carts.length}</p>
        <p className="font-bold text-lg">Total Price: ${totalPrice.toFixed(2)}</p>
        <Link to={carts.length > 0 ? "/dashboard/payment" : "#"}>
          <button
            className={`px-4 py-2 font-bold text-lg text-white rounded-md transition duration-300 ${carts.length > 0 ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-400 cursor-not-allowed"}`}
            disabled={carts.length === 0}
          >
            Pay
          </button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {carts.map((item) => (
          <CartCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
