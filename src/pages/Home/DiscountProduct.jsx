import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";
import useMedicines from "../../hooks/useMedicines";

const DiscountProduct = () => {
  const [medicines] = useMedicines();
  const products = medicines.filter((item) => item.discount > 0);

  return (
    <div className="p-3 py-5 pt-14">
      <h2 className="text-2xl font-bold mb-6 text-center">Discount Products</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide
            key={product._id}
            className="bg-white rounded-lg"
          >
            <div className="bg-white rounded-lg border p-4 h-[400px]">
              <img
                src={product.image}
                alt={product.item_name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.item_name}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  {product.item_generic_name} | {product.item_mass_unit}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Company:{" "}
                  <span className="font-medium text-gray-800">
                    {product.company}
                  </span>
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Category:{" "}
                  <span className="font-medium text-gray-800">
                    {product.category}
                  </span>
                </p>
                <div className="flex justify-center items-center mb-4">
                  {product.discount > 0 && (
                    <p className="text-sm text-green-600 font-medium bg-green-100 rounded-full px-3 py-1 mr-2">
                      {product.discount}% OFF
                    </p>
                  )}
                  <p className="text-lg font-bold text-gray-800">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiscountProduct;
