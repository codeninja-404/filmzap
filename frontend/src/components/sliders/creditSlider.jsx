import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const CreditSlider = ({ contentCredits }) => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          grid: {
            rows: 2,
            fill: "row",
          },
        },

        768: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: "row",
          },
        },

        1024: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
      }}
    >
      {contentCredits.map((member) => (
        <SwiperSlide key={member.id}>
          <div className="shadow-md  bg-gray-900/60 rounded-lg overflow-hidden flex items-center p-4 ">
            <div className="flex-shrink-0">
              {member.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.job}</p>
              <p className="text-sm text-gray-500">{member.department}</p>
              {member.known_for_department && (
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Known For:</span>{" "}
                  {member.known_for_department}
                </p>
              )}
              {member.popularity && (
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Popularity:</span>{" "}
                  {member.popularity.toFixed(1)}
                </p>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CreditSlider;
