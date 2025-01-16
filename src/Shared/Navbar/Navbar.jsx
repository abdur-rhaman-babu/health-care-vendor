import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/vendor-logo.png";
import { BsCart4 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
  const { user, userSignOut } = useAuth();
  const handleSignOut = () => {
    userSignOut();
  };
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
            <FaBars />
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
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div id="my-anchor-element" className="w-10 rounded-full">
                <img referrerPolicy="no-referrer" alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              <Tooltip
                anchorSelect="#my-anchor-element"
                content={user?.displayName}
                className="flex z-10"
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
                <Link to='/dashboard'>Dashboard</Link>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
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
