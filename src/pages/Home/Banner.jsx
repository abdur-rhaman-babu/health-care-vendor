import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import slider_1 from "../../assets/Image/banner_1.png";
import slider_2 from "../../assets/Image/banner_2.png";
import slider_3 from "../../assets/Image/banner_3.png";
import { Link } from "react-router-dom";

const BannerText = () => (
  <div className="flex flex-col space-y-4 md:w-1/2 max-w-lg dark:text-white ">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
      We are here for your care
    </h2>
    <h1 className="font-bold text-4xl text-gray-900 dark:text-white">
      Take Care of Your <span className="text-primary">Health</span>
    </h1>
    <p>
      Providing accessible, high-quality healthcare solutions with expert
      professionals, modern technology, and a patient-first approach. Your
      health, our priority.
    </p>
    <div>
      <Link to="/shop">
        <button className="bg-primary duration-300 hover:bg-blue-600 px-4 rounded-md font-semibold text-white py-2">
          Shop Now
        </button>
      </Link>
    </div>
  </div>
);

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {[slider_1, slider_2, slider_3].map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-between px-4 md:pl-16 bg-white dark:bg-black h-[500px]">
            <BannerText />

            <div className="hidden md:block md:w-1/2 md:h-full">
              <img
                className="w-full h-full object-cover"
                src={slide}
                alt={`Banner ${index + 1}`}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
