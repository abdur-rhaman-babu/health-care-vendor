import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
import useAuth from "./../../hooks/useAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation/registerFormValidation";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { setUser, createUser, updataUserProfile, loading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = async (data) => {
    // console.log(data)
    const imageFile = { image: data.photo[0] };
    // console.log(imageFile)
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const updateProfile = {
      displayName: data.username,
      photoURL: res.data.data.display_url,
      role: data.role,
    };
    console.log(updateProfile)
    createUser(data.email, data.password).then((res) => {
      updataUserProfile(updateProfile);
      setUser(res.user);
      console.log(res.user)

      const userInfo = {
        name: data.username,
        email: res.user?.email,
        role: data.role
      }
      axiosPublic.post('/users', userInfo)
      .then(res=>{
        console.log(res.data)
        navigate("/");
      })
      toast.success("Sign Up successfull");
    });
  };
  return (
    <>
      <Helmet>
        <title>Healthcare || Signup</title>
      </Helmet>
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
                />
                <p className="text-red-600">{errors.username?.message}</p>
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
              <p className="text-red-600">{errors.photo?.message}</p>
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
              />
              <p className="text-red-600">{errors.email?.message}</p>
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
              />
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
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
            <p className="text-red-600">{errors.role?.message}</p>
            <div className="form-control mt-6">
              <button className="py-3 rounded-lg bg-[#058789] hover:bg-[#05696b] text-white">
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Sign Up"
                )}
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
    </>
  );
};

export default Register;
