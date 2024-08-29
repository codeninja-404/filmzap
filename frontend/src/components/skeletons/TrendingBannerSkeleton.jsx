const TrendingBannerSkeleton = () => {
  return (
    <div className="relative h-screen pt-20">
      {/* Skeleton Background */}
      <div className="absolute top-0 left-0 w-full h-full   -z-50" />

      {/* Skeleton Overlay */}
      <div
        className="absolute top-0 left-0 w-full   h-full -z-50"
        aria-hidden="true"
      />

      {/* Skeleton Content Container */}
      <div className="absolute px-8 md:px-16 lg:px-32 top-0 left-0 w-full h-full flex flex-col justify-center ">
        {/* Gradient Placeholder */}
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4a1077]/40 via-transparent h-full -z-50" />

        {/* Skeleton Title */}
        <div className="max-w-2xl">
          <div className="mt-4 bg-gradient-to-r from-gray-300/20 to-gray-500/20 h-10 w-3/4 rounded-md animate-pulse" />

          {/* Skeleton Metadata */}
          <div className="mt-2 bg-gradient-to-r from-gray-300/20 to-gray-500/20 h-6 w-1/4 rounded-md animate-pulse" />

          {/* Skeleton Overview */}
          <div className="mt-4 bg-gradient-to-r from-gray-300/20 to-gray-500/20 h-6 w-full rounded-md animate-pulse" />
          <div className="mt-2 bg-gradient-to-r from-gray-300/20 to-gray-500/20 h-6 w-5/6 rounded-md animate-pulse" />
        </div>

        {/* Skeleton Buttons */}
        <div className="flex mt-10 gap-4">
          <div className="bg-gradient-to-r from-gray-300/20 to-gray-500/20 w-24 h-10 rounded-md flex justify-center items-center animate-pulse" />
          <div className="bg-gradient-to-r from-gray-300/20 to-gray-500/20 w-24 h-10 rounded-md flex justify-center items-center animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default TrendingBannerSkeleton;
