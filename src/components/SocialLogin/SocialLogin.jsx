import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { setUser, signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(res=>{
        setUser(res.user)
        // console.log(res.user)
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          role:'user'
        }
        axiosPublic.post('/users', userInfo)
        .then(res=> {
          navigate('/')
        })
        
    })
  };
  return (
    <div>
      <div
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-2 border-2 rounded-lg py-2 cursor-pointer"
      >
        <FcGoogle size={25} />
        <span className="font-bold">Login With Google</span>
      </div>
    </div>
  );
};

export default SocialLogin;
