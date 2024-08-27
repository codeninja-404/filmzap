import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const slideStyles = [
  { backgroundColor: "bg-green-400" },
  { backgroundColor: "bg-blue-400" },
  { backgroundColor: "bg-red-400" },
  { backgroundColor: "bg-yellow-400" },
  { backgroundColor: "bg-purple-400" },
  { backgroundColor: "bg-pink-400" },
  { backgroundColor: "bg-teal-400" },
  { backgroundColor: "bg-gray-400" },
  { backgroundColor: "bg-indigo-400" },
];

const TrendingSlide = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true} // Enable looping
        modules={[Pagination]}
        className="mySwiper py-10"
        ref={swiperRef}
      >
        {slideStyles.map((style, index) => (
          <SwiperSlide
            key={index}
            className={`flex rounded-lg items-center justify-center  w-[150px] h-[250px] ${style.backgroundColor} ${style.width}`}
          >
            Slide {index + 1}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex  justify-between z-10 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <button
          className="bg-gray-900 hover:bg-gray-800 text-[22px] w-[20px] h-[180px] flex justify-center items-center transition-all rounded-xl"
          onClick={handlePrevClick}
        >
          <ChevronLeft />
        </button>
        <button
          className="bg-gray-900 hover:bg-gray-800 text-[22px] w-[20px] h-[180px] flex justify-center items-center transition-all rounded-xl"
          onClick={handleNextClick}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default TrendingSlide;
