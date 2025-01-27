import { MdAdd, MdDelete } from "react-icons/md";
import useMedicines from "../../../hooks/useMedicines";
import { useState } from "react";

const ManageBannerAd = () => {
  const [medicines] = useMedicines();
  const [changeAd, setChangeAd] = useState(false);

  return (
    <div>
      <div className="overflow-x-auto py-10">
        <table className="table border -z-50">
          {/* head */}
          <thead className="bg-[#058789] text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Seller Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="h-20 w-20 rounded-lg border"
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>{item.item_name}</td>
                <td>{item.description}</td>
                <td>{item.email}</td>

                <td>
                  <button
                    onClick={() => setChangeAd(!changeAd)}
                    className={`border p-2 text-xl text-white ${changeAd ? 'bg-red-600': 'bg-[#058789]'}`}
                  >
                    {changeAd ? <MdDelete /> : <MdAdd />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBannerAd;
