import { useEffect, useState, useRef } from "react";
import { useContentStore } from "../../store/content";
import axios from "axios";
import ContentCard from "../ContentCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ContentCardSkeleton from "../skeletons/ContentCardSkeleton";

const ContentSlider = ({ category, id }) => {
  const { contentType } = useContentStore();
  const [contents, setContents] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const swiperRef = useRef(null);
  const formattedCategory = category
    ? category.replaceAll("_", " ").replace(/^\w/, (c) => c.toUpperCase())
    : "";

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  useEffect(() => {
    const getContent = async () => {
      setContents([]);
      try {
        let res;
        if (id) {
          res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
          setTimeout(() => {
            setContents(res.data.content);
            setTotalSlides(res.data.content.length);
          }, 2000);
        } else {
          res = await axios.get(`/api/v1/${contentType}/${category}`);

          setTimeout(() => {
            setContents(res.data.content);
            setTotalSlides(res.data.content.length);
          }, 2000);
        }
      } catch (error) {
        if (error.message.includes("404")) {
          setContents([]);
        } else {
          console.error("Error fetching content:", error);
        }
      }
    };
    getContent();
  }, [category, contentType, id]);
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl text-white">
          {formattedCategory || "Similar Content"}
        </h2>
        <div className="flex items-center gap-2">
          <button
            className="text-gray-400 hover:text-white bg-transition p-0.5 rounded-lg"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft
              className="bg-gray-900/90  p-1 rounded-md "
              size={30}
            />
          </button>
          <div className="text-sm text-gray-400">
            {activeIndex + 1} / {totalSlides}
          </div>
          <button
            className="text-gray-400 hover:text-white bg-transition p-0.5 rounded-lg"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight
              className="bg-gray-900/90 p-1  rounded-md"
              size={30}
            />
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
          {" "}
          {Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index + 1} className="w-auto">
              <ContentCardSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ContentSlider;
