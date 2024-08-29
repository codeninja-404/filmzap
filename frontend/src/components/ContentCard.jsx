import { Clock, Eye } from "lucide-react";
import { SMALL_IMG_BASE_URL } from "../utils/constants";

const ContentCard = ({ content }) => {
  console.log(content);
  return (
    <div className="bg-gray-900 p-4 max-w-sm mx-auto rounded-lg shadow-lg ">
      <div className="relative w-48">
        <img
          src={SMALL_IMG_BASE_URL + content.backdrop_path}
          alt="Mobius movie poster"
          className="w-48 h-52 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="text-white text-2xl font-bold">Mobius</h2>
          <p className="text-gray-300 text-sm">A New Sci-Fi Adventure</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center  border-gray-600 border px-2 py-0.5 rounded-full">
          <Clock className="size-4 mb-0.5 text-gray-400 mr-1" />
          <span className="text-gray-400 text-sm">1h 30min</span>
        </div>
        <div className="flex items-center border-gray-600 border px-2 py-0.5 rounded-full">
          <Eye className="size-4 mb-0.5 text-gray-400 mr-1" />
          <span className="text-gray-400 text-sm">2K</span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
