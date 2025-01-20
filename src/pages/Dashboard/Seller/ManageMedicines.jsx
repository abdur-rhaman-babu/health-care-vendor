import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSellerManage from "../../../hooks/useSellerManage";

const ManageMedicines = () => {
  const { loading, user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [medicines] = useSellerManage();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const medicines = {
        item_name: data.item_name,
        item_generic_name: data.item_generic_name,
        description: data.description,
        image: res.data.data.display_url,
        category: data.category,
        company: data.company,
        item_mass_unit: data.item_mass_unit,
        price: data.price,
        discount: data.discount,
        email: user.email,
      };

      const medicineRes = await axiosSecure.post("/medicines", medicines);
      if (medicineRes.data.insertedId) {
        toast.success(`${medicines.item_name} is added`);
        navigate("/dashboard/seller-home");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Healthcare || sellerhome</title>
      </Helmet>
      <div className="bg-gray-100 min-h-screen p-5">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Seller Medicine List
          </h2>
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-semibold">Your Medicines</h4>
            <button
              className="bg-[#058789] text-white px-4 py-2 rounded shadow hover:bg-[#05696B]"
              onClick={openModal}
            >
              Add Medicine
            </button>
          </div>
          <table className="table-auto w-full bg-white shadow rounded">
            <thead className="bg-[#058789] text-white">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Item Name</th>
                <th className="px-4 py-2">Generic Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Discount</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((item, index) => (
                <tr key={item._id} className="border-b text-center">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.item_name}</td>
                  <td className="px-4 py-2">{item.item_generic_name}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.company}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">{item.discount}%</td>
                </tr>
              ))}
            </tbody>
          </table>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh]">
                <div className="p-4 border-b flex justify-between items-center">
                  <h5 className="text-lg font-bold">Add Medicine</h5>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="p-4">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Item Name
                        </label>
                        <input
                          type="text"
                          {...register("item_name")}
                          className="w-full mt-1 border rounded px-3 py-2"
                          placeholder="Enter item name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Generic Name
                        </label>
                        <input
                          type="text"
                          {...register("item_generic_name")}
                          className="w-full mt-1 border rounded px-3 py-2"
                          placeholder="Enter generic name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Short Description
                      </label>
                      <textarea
                        className="w-full mt-1 border rounded px-3 py-2"
                        {...register("description")}
                        rows="3"
                        placeholder="Enter short description"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Image Upload
                      </label>

                      <input
                        type="file"
                        className="file-input file-input-bordered w-full max-w-xs"
                        {...register("image")}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Category
                        </label>
                        <select
                          defaultValue="default"
                          {...register("category")}
                          className="w-full mt-1 border rounded px-3 py-2"
                        >
                          <option disabled value="default">
                            Select category
                          </option>
                          <option value="Tablet">Tablet</option>
                          <option value="Syrup">Syrup</option>
                          <option value="Powder">Powder</option>
                          <option value="Capsule">Capsule</option>
                          <option value="Gel">Gel</option>
                          <option value="Ointment">Ointment</option>
                          <option value="Inhaler">Inhaler</option>
                          <option value="Cream">Cream</option>
                          <option value="Injection">Injection</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Company
                        </label>
                        <select
                          defaultValue="default"
                          {...register("company")}
                          className="w-full mt-1 border rounded px-3 py-2"
                        >
                          <option disabled value="default">
                            Select company
                          </option>
                          <option value="NutriCare">NutriCare</option>
                          <option value="SafeCare">SafeCare</option>
                          <option value="FreshFeel">FreshFeel</option>
                          <option value="Square">Square</option>
                          <option value="IBN Sina">IBN Sina</option>
                          <option value="Acme">Acme</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Item Mass Unit
                        </label>
                        <input
                          type="number"
                          {...register("item_mass_unit")}
                          className="w-full mt-1 border rounded px-3 py-2"
                          placeholder="Enter price per unit"
                          min="0"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Per Unit Price
                        </label>
                        <input
                          type="number"
                          min="0"
                          {...register("price")}
                          className="w-full mt-1 border rounded px-3 py-2"
                          placeholder="Enter price per unit"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Discount Percentage
                      </label>
                      <input
                        type="number"
                        {...register("discount")}
                        className="w-full mt-1 border rounded px-3 py-2"
                        placeholder="Enter discount percentage"
                        defaultValue="0"
                        min="0"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#058789] text-white py-2 rounded shadow hover:bg-[#05696B]"
                    >
                      {loading ? (
                        <span className="loading loading-spinner loading-md"></span>
                      ) : (
                        "Add Medicine"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageMedicines;
