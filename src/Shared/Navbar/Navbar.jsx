import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/vendor-logo.png";
import { BsCart4 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Tooltip } from "react-tooltip";
import useCarts from "../../hooks/useCarts";

const Navbar = () => {
  const { user, userSignOut } = useAuth();
  const [carts] = useCarts();
  const handleSignOut = () => {
    userSignOut();
  };
  const navLinks = (
    <ul className="lg:flex items-center gap-6 text-lg">
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary font-bold border-b-2 border-primary" : "hover:text-primary")} end>Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop" className={({ isActive }) => (isActive ? "text-primary font-bold border-b-2 border-primary" : "hover:text-primary")} end>Shop</NavLink>
      </li>
      <li>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-primary font-bold border-b-2 border-primary" : "hover:text-primary")} end>
          <div className="relative flex items-center">
            <BsCart4 className="text-2xl" />
            {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
                {carts.length}
              </span>
            )}
          </div>
        </NavLink>
      </li>
    </ul>
  );
  return (
    <div className="navbar bg-white/60 backdrop-blur-md shadow-md fixed left-0 right-0 top-0 px-6 py-3 lg:px-16 z-50 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <FaBars className="text-xl text-primary" />
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box shadow mt-3 w-52 p-2">
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="h-10 w-10" src={logo} alt="Logo" />
          <span className="text-2xl font-bold text-primary">Healthcare</span>
        </div>
      </div>
      <div className="hidden lg:flex">{navLinks}</div>
      <div className="flex items-center gap-4">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div id="my-anchor-element" className="w-10 rounded-full overflow-hidden">
                <img referrerPolicy="no-referrer" alt="User Avatar" src={user?.photoURL} />
              </div>
            </div>
            <Tooltip anchorSelect="#my-anchor-element" content={user?.displayName} className="z-10" />
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box shadow mt-3 w-52 p-2">
              <li><Link>Update Profile</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><button onClick={handleSignOut}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="border px-5 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">Join Us</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
