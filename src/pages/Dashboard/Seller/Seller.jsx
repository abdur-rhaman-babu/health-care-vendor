import React from "react";
import { FaHome } from "react-icons/fa";
import { MdManageAccounts, MdWorkHistory } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Seller = () => {
  return (
    <>
      <li>
        <NavLink className="flex items-center gap-2 py-2 px-2" to="seller-home">
          {" "}
          <FaHome /> Seller Homepage
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-2 py-2 px-2"
          to="manage-medicine"
        >
          <MdManageAccounts />
          Manage Medicines
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-2 py-2 px-2"
          to="payment-history"
        >
          {" "}
          <MdWorkHistory />
          Payment History
        </NavLink>
      </li>
    </>
  );
};

export default Seller;
