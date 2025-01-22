import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUsers from "../../../hooks/useUsers";

const ManageUser = () => {
  const [users] = useUsers();

  return (
    <div>
      <div className="overflow-x-auto py-10">
        <table className="table border text-center">
          {/* head */}
          <thead className="bg-[#058789] text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  <select defaultValue='default'  className="select select-bordered">
                    <option value='default' disabled>
                      Update role?
                    </option>
                    <option value="admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Seller">Seller</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
