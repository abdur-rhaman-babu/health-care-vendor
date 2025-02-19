import { Helmet } from "react-helmet-async";
import MedicineCategory from "../../components/MedicineCategory/MedicineCategory";
import HealthCareService from "./HealthCareService";
import DiscountProduct from "./DiscountProduct";
import Banner from "./Banner";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Healthcare || Home</title>
      </Helmet>
      <Banner />
      <div className="lg:container px-2">
        <MedicineCategory />
        <DiscountProduct />
        <HealthCareService />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
