import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import useCategory from "../../../hooks/useCategory";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateCategory = () => {
  const [item, setItem] = useState({});
  const [,refetch] = useCategory()
  const navigate = useNavigate()
  // console.log(item._id)
  const { loading } = useAuth();
  const { id } = useParams();
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

      const category = await axiosSecure.post(
        `/category/${id}`,
        medicineCategory
      );
      if (category.data.modifiedCount > 0) {
        toast.success(`${medicineCategory.category} is updated`);
        navigate('/dashboard/manage-category')
        refetch();
      }
    }
  };

  useEffect(() => {
    axiosSecure.get(`/category/${id}`).then((res) => {
      setItem(res.data);
    });
  }, [id]);

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category Name
          </label>
          <input
            defaultValue={item.category}
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
            defaultValue={item.image}
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
            "Update Category"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateCategory;
