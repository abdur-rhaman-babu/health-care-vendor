import { BiSolidCategory } from "react-icons/bi";
import { FaHome, FaUser } from "react-icons/fa";
import { MdPayments, MdWorkHistory } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <li>
        <NavLink className="flex items-center gap-1 py-2 px-2" to="admin-home">
          {" "}
          <FaHome /> Admin Homepage
        </NavLink>
      </li>
      <li>
        <NavLink className="flex items-center gap-1 py-2 px-2" to="manage-user">
          <FaUser />
          Manage User
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-1 py-2 px-2"
          to="manage-category"
        >
          {" "}
          <BiSolidCategory />
          Manage Category
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-1 py-2 px-2"
          to="payment-management"
        >
          {" "}
          <MdPayments />
          Payment Management
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-1 py-2 px-2"
          to="sales-report"
        >
          {" "}
          <MdWorkHistory />
          Sales Report
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-1 py-2 px-2"
          to="manage-banner-ad"
        >
          {" "}
          <RiAdvertisementFill />
          Manage Banner Advertise
        </NavLink>
      </li>
    </>
  );
};

export default Admin;
