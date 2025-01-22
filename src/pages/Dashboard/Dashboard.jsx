import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../Dashboard/dashboard.css";
import { FaBars, FaHome } from "react-icons/fa";
import { MdManageAccounts, MdWorkHistory } from "react-icons/md";
import Seller from "./Seller/Seller";
import Admin from "./Admin/Admin";
import useAdmin from "../../hooks/useAdmin";
const Dashboard = () => {
  const isSeller = true;
  const [isAdmin] = useAdmin();
  return (
    <div>
      <Helmet>
        <title>Healthcare || dashboard</title>
      </Helmet>
      <div>
        <div className="navbar fixed top-0 left-0 right-0 shadow-md bg-[#058789] lg:px-24 text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <FaBars />
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#058789] rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {isAdmin && <Admin />}
                <hr />
                <li>
                  <Link to="/" className="flex items-center gap-1 py-2 px-2">
                    {" "}
                    <FaHome /> Home
                  </Link>
                </li>
              </ul>
            </div>
            <p className="font-bold text-xl">Dashboard</p>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {isAdmin && <Admin />}
            </ul>

            <p className="hidden md:block">||</p>
            <ul>
              <li>
                <Link to="/" className="flex items-center gap-1 py-2 px-2">
                  {" "}
                  <FaHome /> Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
