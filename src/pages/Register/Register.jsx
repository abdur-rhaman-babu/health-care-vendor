import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
import useAuth from "./../../hooks/useAuth";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { user, setUser, createUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.photo[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    createUser(data.email, data.password)
    .then(res=> {
      console.log(res.user)
      setUser(res.user)
    })
  };
  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered"
              {...register("username")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register("photo")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <select
              defaultValue="default"
              {...register("role")}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled value="default">
                Select a role
              </option>
              <option value="user">User</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button className="py-3 rounded-lg bg-[#058789] hover:bg-[#05696b] text-white">
              Sign Up
            </button>
          </div>
          <div className="divider">OR</div>
          <Link to="/login">
            Already have an account?{" "}
            <span className="text-red-600">login now</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
