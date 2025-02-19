import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import Admin from "./Admin/Admin";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";
import Seller from "./Seller/Seller";
import useUser from "../../hooks/useUser";
import User from "./User/User";

const Dashboard = () => {
  const [isUser] = useUser();
  const [isSeller] = useSeller();
  const [isAdmin] = useAdmin();
  
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6 fixed h-full">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          {(isAdmin && <Admin />) || (isSeller && <Seller />) || (isUser && <User />)}
          <hr className="border-gray-700" />
          <li>
            <Link to="/" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
              <FaHome /> Home
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
