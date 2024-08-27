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
  { backgroundColor: "bg-green-400", width: "w-40" },
  { backgroundColor: "bg-blue-400", width: "w-48" },
  { backgroundColor: "bg-red-400", width: "w-56" },
  { backgroundColor: "bg-yellow-400", width: "w-64" },
  { backgroundColor: "bg-purple-400", width: "w-72" },
  { backgroundColor: "bg-pink-400", width: "w-80" },
  { backgroundColor: "bg-teal-400", width: "w-96" },
  { backgroundColor: "bg-gray-400", width: "w-60" },
  { backgroundColor: "bg-indigo-400", width: "w-52" },
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
            className={`flex rounded-lg items-center justify-center h-96 ${style.backgroundColor} ${style.width}`}
          >
            Slide {index + 1}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex  justify-between z-10 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <button
          className="bg-gray-900 hover:bg-gray-800 text-[22px] w-[30px] h-[200px] flex justify-center items-center transition-all rounded-xl"
          onClick={handlePrevClick}
        >
          <ChevronLeft />
        </button>
        <button
          className="bg-gray-900 hover:bg-gray-800 text-[22px] w-[30px] h-[200px] flex justify-center items-center transition-all rounded-xl"
          onClick={handleNextClick}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default TrendingSlide;
