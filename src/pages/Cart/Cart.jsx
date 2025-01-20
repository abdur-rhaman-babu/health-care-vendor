import useCarts from "../../hooks/useCarts";
import CartCard from "./CartCard";
const Cart = () => {
  const [carts, refetch] = useCarts();
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {carts.map((item) => (
          <CartCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
