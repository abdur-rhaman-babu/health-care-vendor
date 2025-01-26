import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 max-w-7xl mx-auto min-h-[64vh]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
