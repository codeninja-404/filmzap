import React from "react";

const TrendingBannerSkeleton = () => {
  return (
    <div className="relative h-screen md:h-[80vh] pt-20">
      {/* Skeleton Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 animate-pulse -z-50" />

      {/* Skeleton Overlay */}
      <div
        className="absolute top-0 left-0 w-full bg-black/50 h-full -z-50"
        aria-hidden="true"
      />

      {/* Skeleton Content Container */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center">
        {/* Gradient Placeholder */}
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4a1077]/60 to-black h-full -z-50" />

        <div className="flex flex-col-reverse lg:flex-row px-2 items-center justify-around">
          <div className="absolute top-0 left-0 w-full  bg-gradient-to-b from-[#4a1077]/40 via-transparent h-full -z-50" />

          {/* Skeleton Title */}
          <div className="w-[300px] md:w-[500px] ">
            <div className="mt-4 bg-gradient-to-r from-gray-300/20 to-gray-500/20 h-10 w-1/2 rounded-md animate-pulse" />

            {/* Skeleton Metadata */}
            <div className="mt-2 bg-gradient-to-r from-gray-300/20 to-gray-500/20 h-6 w-1/4 rounded-md animate-pulse" />

            {/* Skeleton Overview */}
            <div className="mt-4 bg-gradient-to-r from-gray-300/20 to-gray-500/20 h-6 w-full rounded-md animate-pulse" />
            <div className="mt-2 bg-gradient-to-r from-gray-300/20 to-gray-500/20 h-6 w-5/6 rounded-md animate-pulse" />
            <div className="flex mt-10 gap-4">
              <div className="bg-gradient-to-r from-gray-300/20 to-gray-500/20 w-24 h-10 rounded-md flex justify-center items-center animate-pulse" />
              <div className="bg-gradient-to-r from-gray-300/20 to-gray-500/20 w-24 h-10 rounded-md flex justify-center items-center animate-pulse" />
            </div>
          </div>

          {/* Skeleton Image */}
          <div className=" mb-10">
            <div className="h-[400px] w-[250px] bg-gradient-to-r from-gray-300/20 to-gray-500/20 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBannerSkeleton;
