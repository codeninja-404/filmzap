import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ReactPlayer from "react-player";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TrailerSlider = ({ trailers }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsPlaying(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4 px-2">
        <button
          className="text-gray-400 hover:text-white bg-transition p-0.5 rounded-lg"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <ChevronLeft className="bg-gray-900/90 p-1 rounded-md" size={30} />
        </button>
        <div className="text-sm text-gray-400">
          {activeIndex + 1} / {trailers.length}
        </div>
        <button
          className="text-gray-400 hover:text-white bg-transition p-0.5 rounded-lg"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <ChevronRight className="bg-gray-900/90 p-1 rounded-md" size={30} />
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        className="mySwiper"
      >
        {trailers?.map((trailer, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-video mb-8 p-2 sm:px-10 md:px-32">
              <ReactPlayer
                controls={true}
                playing={isPlaying}
                width="100%"
                height="70vh"
                className="mx-auto overflow-hidden rounded-lg"
                url={`https://www.youtube.com/watch?v=${trailer.key}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrailerSlider;
