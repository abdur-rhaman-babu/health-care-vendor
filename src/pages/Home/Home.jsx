import { Helmet } from "react-helmet-async";
import MedicineCategory from "../../components/MedicineCategory/MedicineCategory";
import HealthCareService from "./HealthCareService";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Healthcare || Home</title>
      </Helmet>
      <MedicineCategory/>
      <HealthCareService/>
    </div>
  );
};

export default Home;
