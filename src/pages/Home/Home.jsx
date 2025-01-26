import { Helmet } from "react-helmet-async";
import MedicineCategory from "../../components/MedicineCategory/MedicineCategory";
import HealthCareService from "./HealthCareService";
import DiscountProduct from "./DiscountProduct";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Healthcare || Home</title>
      </Helmet>
      <MedicineCategory/>
      <DiscountProduct/>
      <HealthCareService/>
    </div>
  );
};

export default Home;
