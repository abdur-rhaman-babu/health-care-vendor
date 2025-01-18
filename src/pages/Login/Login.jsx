import { useForm } from "react-hook-form";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location?.state?.from?.pathname || "/login";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInUser(data.email, data.password).then((res) => {
      console.log(res.user);
      setUser(res.user);
      navigate(from, { replace: true });
      toast.success("Sign Up successfull");
    });
  };

  return (
    <div>
      <Helmet>
        <title>Healthcare || login</title>
      </Helmet>
      <div className="flex items-center justify-center pt-20">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="py-3 rounded-lg bg-[#058789] hover:bg-[#05696b] text-white">
                Login
              </button>
            </div>
            <SocialLogin />
            <div className="divider">OR</div>
            <Link to="/register">
              Don't have an account?{" "}
              <span className="text-red-600">Register now</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
