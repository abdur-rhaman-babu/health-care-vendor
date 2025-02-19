import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 min-h-[64vh] bg-[#f3f7f7]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
