import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";
import '../Dashboard/dashboard.css'
import { FaHome } from "react-icons/fa";
import { MdManageAccounts, MdWorkHistory } from "react-icons/md";
const Dashboard = () => {
  const isSeller = true;
  return (
    <div>
      <Helmet>
        <title>Healthcare || dashboard</title>
      </Helmet>
      <div>
        <div className="flex items-center flex-wrap bg-[#058789] md:gap-2 text-white justify-center">
          {isSeller && (
            <ul className="flex flex-wrap justify-center gap-2 py-5 text-white bg-[#058789]">
              <li>
                <NavLink className='flex items-center gap-2 py-2 px-2' to="seller-home"> <FaHome /> Seller Homepage</NavLink>
              </li>
              <li>
                <NavLink className='flex items-center gap-2 py-2 px-2' to="manage-medicine"><MdManageAccounts />Manage Medicines</NavLink>
              </li>
              <li>
                <NavLink className='flex items-center gap-2 py-2 px-2' to="payment-history"> <MdWorkHistory />Payment History</NavLink>
              </li>
            </ul>
          )}
          <p className="hidden md:block">||</p>
          <ul>
            <li>
              <Link to="/" className='flex items-center gap-2 py-2 px-2'> <FaHome/> Home</Link>
            </li>
          </ul>
        </div>
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
