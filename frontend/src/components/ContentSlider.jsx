import { useEffect, useState, useRef } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";
import ContentCard from "./ContentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const ContentSlider = ({ category }) => {
  const { contentType } = useContentStore();
  const [contents, setContents] = useState([]);
  const swiperRef = useRef(null);
  const formattedCategory =
    category.replaceAll("_", " ")[0].toUpperCase() +
    category.replaceAll("_", " ").slice(1);

  useEffect(() => {
    const getContent = async () => {
      const res = await axios.get(`/api/v1/${contentType}/${category}`);
      setContents(res.data.content);
    };
    getContent();
  }, [category, contentType]);

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-2xl text-white">{formattedCategory}</h2>
        <div className="flex gap-2">
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        {contents.map((content) => (
          <SwiperSlide key={content.id} className="w-auto">
            <ContentCard content={content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentSlider;
