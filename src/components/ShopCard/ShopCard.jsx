// import { Helmet } from "react-helmet-async";
// import useMedicines from "../../hooks/useMedicines";
// import { MdRemoveRedEye } from "react-icons/md";
// import { FaShoppingCart } from "react-icons/fa";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import { useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import useCarts from "../../hooks/useCarts";


// const ShopCard = () => {
//   const [medicines] = useMedicines();
//   console.log(medicines)
//   const { user } = useAuth();
//   const [, refetch] = useCarts();
//   const axiosSecure = useAxiosSecure();
//   const [medicine, setMedicine] = useState({});
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   const navigate = useNavigate();


//   const {
//     price,
//     item_name,
//     description,
//     item_generic_name,
//     image,
//     discount,
//     company,
//     category,
//     _id,
//   } = medicine;

//   const handleDisplayDetails = async (id) => {
//     const res = await axiosSecure.get(`/medicines/${id}`);
//     setMedicine(res.data);
//     setIsOpenModal(true);
//     console.log(res.data);
//   };

//   const closeModal = () => {
//     setIsOpenModal(false);
//     setMedicine({});
//   };

//   const handleAddToCart = async (item) => {
//     const { item_name, company, price } = item;
//     if (user && user.email) {
//       const cartItem = {
//         medicineId: _id,
//         email: user.email,
//         item_name,
//         company,
//         price,
//         quantity: 1,
//       };
//       const res = await axiosSecure.post("/carts", cartItem);

//       toast.warning(res.data.message);
//       if (res.data.insertedId) {
//         toast.success(`${item_name} is add to cart`);
//         refetch();
//       }
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Healthcare || shop</title>
//       </Helmet>
//       <div>
//         <div className="overflow-x-auto py-10">
//           <table className="table border">
//             {/* head */}
//             <thead className="bg-[#058789] text-white">
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Price</th>
//                 <th>Select</th>
//                 <th>Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {medicines.map((item, index) => (
//                 <tr key={item._id}>
//                   <th>{index + 1}</th>
//                   <td>{item.item_name}</td>
//                   <td>{item.category}</td>
//                   <td>${item.price}</td>
//                   <td>
//                     <button
//                       onClick={() => handleAddToCart(item)}
//                       className="border p-2 text-xl text-white bg-[#058789]"
//                     >
//                       <FaShoppingCart />
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => handleDisplayDetails(item._id)}
//                       className="border p-2 text-xl text-white bg-[#058789]"
//                     >
//                       <MdRemoveRedEye />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//             <tbody>
//               {medicines.map((item, index) => (
//                 <tr key={item._id}>
//                   <th>{index + 1}</th>
//                   <td>{item.item_name}</td>
//                   <td>{item.category}</td>
//                   <td>${item.price}</td>
//                   <td>
//                     <button
//                       onClick={() => handleAddToCart(item)}
//                       className="border p-2 text-xl text-white bg-[#058789]"
//                     >
//                       <FaShoppingCart />
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => handleDisplayDetails(item._id)}
//                       className="border p-2 text-xl text-white bg-[#058789]"
//                     >
//                       <MdRemoveRedEye />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* modal */}
//       {isOpenModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6">
//             <div className="flex justify-between items-center border-b pb-4 mb-4">
//               <h2 className="text-xl font-bold">Medicine Details</h2>
//               <button onClick={closeModal} className="text-red-500 font-bold">
//                 ✖
//               </button>
//             </div>
//             {medicine ? (
//               <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative">
//                   <img
//                     src={image}
//                     alt={item_name}
//                     className="w-full h-48 object-cover rounded-t-lg"
//                   />
//                   {discount > 0 && (
//                     <span className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-orange-400 text-white text-xs px-3 py-1 rounded-full shadow-lg">
//                       {discount}% OFF
//                     </span>
//                   )}
//                 </div>
//                 <div className="p-4">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                     {item_name}
//                   </h2>
//                   <p className="text-gray-500 text-sm italic mb-1">
//                     {item_generic_name}
//                   </p>
//                   <p className="text-gray-600 text-sm mb-1">
//                     <span className="font-semibold">Company:</span> {company}
//                   </p>
//                   <p className="text-gray-600 text-sm mb-3">
//                     <span className="font-semibold">Category:</span> {category}
//                   </p>
//                   <p className="text-gray-700 text-sm line-clamp-3 mb-4">
//                     {description}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-2xl font-extrabold text-[#058789]">
//                         ${price}
//                       </p>
//                       {discount > 0 && (
//                         <p className="text-sm text-gray-500 line-through">
//                           ${(price + (price * discount) / 100).toFixed(2)}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <p>Loading...</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopCard;
