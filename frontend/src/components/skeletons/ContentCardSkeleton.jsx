const ContentCardSkeleton = () => {
  return (
    <div className="bg-gray-900 p-4 max-w-sm mx-auto rounded-lg shadow-lg animate-pulse">
      <div className="relative w-48">
        {/* Image Skeleton */}
        <div className="w-48 h-52 bg-gray-700 rounded-t-lg"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

        {/* Text Skeleton */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>

      {/* Bottom Info Skeleton */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center border-gray-600 border px-2 py-0.5 rounded-full">
          <div className="h-4 w-4 bg-gray-700 rounded-full mr-1"></div>
          <span className="h-4 bg-gray-700 rounded w-12"></span>
        </div>
        <div className="flex items-center border-gray-600 border px-2 py-0.5 rounded-full">
          <div className="h-4 w-4 bg-gray-700 rounded-full mr-1"></div>
          <span className="h-4 bg-gray-700 rounded w-12"></span>
        </div>
      </div>
    </div>
  );
};

export default ContentCardSkeleton;
