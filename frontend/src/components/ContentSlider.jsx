import { useEffect, useState, useRef } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";
import ContentCard from "./ContentCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ContentCardSkeleton from "./skeletons/ContentCardSkeleton";

const ContentSlider = ({ category }) => {
  const { contentType } = useContentStore();
  const [contents, setContents] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const swiperRef = useRef(null);
  const formattedCategory =
    category.replaceAll("_", " ")[0].toUpperCase() +
    category.replaceAll("_", " ").slice(1);

  useEffect(() => {
    const getContent = async () => {
      const res = await axios.get(`/api/v1/${contentType}/${category}`);
      setContents(res.data.content);
      setTotalSlides(res.data.content.length);
    };
    getContent();
  }, [category, contentType]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl text-white">{formattedCategory}</h2>
        <div className="flex items-center gap-2">
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="text-sm text-gray-400">
            {activeIndex + 1} / {totalSlides}
          </div>
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      {contents.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className="mySwiper"
        >
          {contents.map((content) => (
            <SwiperSlide key={content?.id} className="w-auto">
              <ContentCard content={content} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <ContentCardSkeleton key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentSlider;
