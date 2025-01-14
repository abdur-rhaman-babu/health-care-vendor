import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
