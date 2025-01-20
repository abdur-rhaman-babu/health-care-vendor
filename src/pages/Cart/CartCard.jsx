import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";

const CartCard = ({ item }) => {
  const [, refetch] = useCarts();
  const { item_name, company, price, quantity, _id } = item;
  const axiosSecure = useAxiosSecure();
  const handleDeleteFromCart = async (id) => {
    const res = await axiosSecure.delete(`/cart/${id}`);
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      toast.success(`${item_name} is successfully deleted`);
      refetch();
    }
  };
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{item_name}</h2>
        <p className="text-sm text-gray-500">{company}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg font-bold text-[#058789]">${price.toFixed(2)}</p>
        <div className="flex items-center gap-2">
          <button
            
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
           
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => handleDeleteFromCart(_id)}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartCard;
