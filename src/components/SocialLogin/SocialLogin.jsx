import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { setUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate()
  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(res=>{
        setUser(res.user)
        navigate('/')
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
