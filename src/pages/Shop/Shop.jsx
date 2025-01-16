import { Helmet } from "react-helmet-async";
import useMedicines from "../../hooks/useMedicines";
import { MdRemoveRedEye } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Shop = () => {
  const [medicines, refetch] = useMedicines();
  return (
    <div>
      <Helmet>
        <title>Healthcare || shop</title>
      </Helmet>
      <div>
        <div className="overflow-x-auto py-10">
          <table className="table border">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Select</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.item_name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td><button className="border p-2 text-xl text-white bg-[#05696b]"><FaShoppingCart /></button></td>
                  <td><button className="border p-2 text-xl text-white bg-[#05696b]"><MdRemoveRedEye /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Shop;
