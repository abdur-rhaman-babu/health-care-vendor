import { Helmet } from "react-helmet-async";
import MedicineCategory from "../../components/MedicineCategory/MedicineCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Healthcare || Home</title>
      </Helmet>
      <h1>This is home page</h1>
      <MedicineCategory/>
    </div>
  );
};

export default Home;
