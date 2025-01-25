import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEdit, FaTimes } from "react-icons/fa";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useCategory from "../../../hooks/useCategory";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ManageCategory = () => {
  const [categories, refetch] = useCategory();
  const { loading } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const medicineCategory = {
        category: data.category,
        image: res.data.data.display_url,
      };

      const category = await axiosSecure.post("/categories", medicineCategory);
      if (category.data.insertedId) {
        toast.success(`${medicineCategory.category} is added`);
        refetch();
      }
    }
  };

  const handleDeleteCategory = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/category/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Category has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

 
  return (
    <>
      <Helmet>
        <title>Healthcare || M category</title>
      </Helmet>
      <div className="bg-gray-100 min-h-screen p-5">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">All Category</h2>
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-semibold">Your Medicines</h4>
            <button
              className="bg-[#058789] text-white px-4 py-2 rounded shadow hover:bg-[#05696B]"
              onClick={openModal}
            >
              Add Category
            </button>
          </div>
          <table className="table-auto w-full bg-white shadow rounded">
            <thead className="bg-[#058789] text-white">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Category Image</th>
                <th className="px-4 py-2">Category Name</th>
                <th className="px-4 py-2">Update</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item, index) => (
                <tr key={item._id} className="border-b text-center">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 flex justify-center">
                    <img className="h-14 w-14" src={item.image} alt="" />
                  </td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">
                    <Link to={`/dashboard/update/${item._id}`}>
                      <button>
                        <FaEdit size={25} />
                      </button>
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleDeleteCategory(item._id)}>
                      <MdDelete size={25} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh]">
                <div className="p-4 border-b flex justify-between items-center">
                  <h5 className="text-lg font-bold">Add Category</h5>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="p-4">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Category Name
                      </label>
                      <input
                        type="text"
                        {...register("category")}
                        className="w-full mt-1 border rounded px-3 py-2"
                        placeholder="Enter item name"
                        required
                      />
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

                    <button
                      type="submit"
                      className="w-full bg-[#058789] text-white py-2 rounded shadow hover:bg-[#05696B]"
                    >
                      {loading ? (
                        <span className="loading loading-spinner loading-md"></span>
                      ) : (
                        "Add Category"
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

export default ManageCategory;
