import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/vendor-logo.png";
import { BsCart4 } from "react-icons/bs";
const Navbar = () => {
  const isLoggedIn = false;
  const navLinks = (
    <div className="lg:flex items-center">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          <div className="indicator">
            <span className="absolute text-white -top-5 -right-5 bg-red-600 px-2 rounded-full">
              0
            </span>
            <i>
              <BsCart4 />
            </i>
          </div>
        </NavLink>
      </li>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Language</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Bangla</a>
                </li>
                <li>
                  <a>English</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
  return ( 
    <div className="navbar bg-base-100 shadow-md fixed left-0 right-0 top-0 lg:px-16 lg:py-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="h-10 w-10" src={logo} alt="" />
          <span className="text-2xl font-semibold">Healthcare</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks} </ul>
      </div>
      <div className="navbar-end">
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link>Update Profile</Link>
              </li>
              <li>
                <Link>Dashboard</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to='/login'>
            {" "}
            <button className="border px-5 py-2 rounded-lg font-semibold">
              Join Us
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
