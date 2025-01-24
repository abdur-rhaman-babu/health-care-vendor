import { FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const User = () => {
  return (
    <>
      <li>
        <NavLink className="flex items-center gap-2 py-2 px-2" to="user-payment-history">
          {" "}
          <FaHistory /> Payemnt History
        </NavLink>
      </li>
    </>
  );
};

export default User;
