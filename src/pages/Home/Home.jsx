import { Helmet } from "react-helmet-async";
import MedicineCategory from "../../components/MedicineCategory/MedicineCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Healthcare || Home</title>
      </Helmet>
      <MedicineCategory/>
    </div>
  );
};

export default Home;
