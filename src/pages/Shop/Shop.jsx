import { Helmet } from "react-helmet-async";
import { MdRemoveRedEye } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useMedicines from "../../hooks/useMedicines";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Shop = () => {
  const [medicines] = useMedicines();
  const { user } = useAuth();
  const [, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const [medicine, setMedicine] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleDisplayDetails = async (id) => {
    try {
      const { data } = await axiosSecure.get(`/medicines/${id}`);
      setMedicine(data);
      setIsOpenModal(true);
    } catch (error) {
      console.error("Error fetching medicine details:", error);
    }
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setMedicine(null);
  };

  const handleAddToCart = async (item) => {
    if (!user?.email) {
      navigate("/login");
      return;
    }
    try {
      const cartItem = {
        medicineId: item._id,
        email: user.email,
        item_name: item.item_name,
        company: item.company,
        price: item.price,
        quantity: 1,
      };
      const { data } = await axiosSecure.post("/carts", cartItem);

      if (data.insertedId) {
        toast.success(`${item.item_name} added to cart`);
        refetch();
      } else {
        toast.warning(data.message);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <section>
      <SectionTitle title='Shop Now'/>
      <Helmet>
        <title>Healthcare || Shop</title>
      </Helmet>
      <div className="lg:container py-10 px-2">

        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
          {medicines.map((item) => (
            <div key={item._id} className="border p-4 rounded-lg bg-white flex flex-col items-center">
              <img
                src={item.image}
                alt={item.item_name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold">{item.item_name}</h3>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-xl font-bold text-[#058789]">${item.price}</p>
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="border p-2 text-xl text-white bg-[#058789] rounded"
                >
                  <FaShoppingCart />
                </button>
                <button
                  onClick={() => handleDisplayDetails(item._id)}
                  className="border p-2 text-xl text-white bg-[#058789] rounded"
                >
                  <MdRemoveRedEye />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpenModal && medicine && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h2 className="text-xl font-bold">Medicine Details</h2>
              <button onClick={closeModal} className="text-red-500 font-bold">
                ✖
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src={medicine.image}
                alt={medicine.item_name}
                className="w-full h-48 object-cover rounded"
              />
              <div>
                <h2 className="text-2xl font-bold text-[#058789]">{medicine.item_name}</h2>
                <p className="text-gray-800 font-semibold">Generic Name: <span className="font-normal">{medicine.item_generic_name}</span></p>
                <p className="text-gray-800 font-semibold">Company: <span className="font-normal">{medicine.company}</span></p>
                <p className="text-gray-800 font-semibold">Category: <span className="font-normal">{medicine.category}</span></p>
                <p className="text-gray-800 font-semibold">Description:</p>
                <p className="text-gray-700 mb-4">{medicine.description}</p>
                <p className="text-2xl font-extrabold text-[#058789] mt-4">
                  ${medicine.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Shop;
