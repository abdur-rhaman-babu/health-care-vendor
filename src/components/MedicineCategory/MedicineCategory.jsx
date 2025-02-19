import useCategory from "../../hooks/useCategory";
import { Link } from "react-router-dom";

const MedicineCategory = () => {
  const [categories] = useCategory();
  return (
    <div className="pt-14">
      <h1 className="my-5 text-center text-2xl font-bold">Medicine Category</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((item) => (
          <div key={item._id}>
            <Link to={`/shop/${item.category}`}>
              <div className="flex items-center gap-2 border p-2 rounded-lg cursor-pointer bg-white">
                <div>
                  <img className="h-14 w-14" src={item.image} alt="" />
                </div>
                <div>
                  <h2 className="font-bold">Category: {item.category}</h2>
                  <p className="font-bold">
                    Medicine Count: {item.medicineCount}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineCategory;
