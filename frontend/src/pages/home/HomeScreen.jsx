import { Info, Play } from "lucide-react";
import { Link } from "react-router-dom";
import useGetTrending from "../../hooks/useGetTrending";
const HomeScreen = () => {
  const { trending } = useGetTrending();
  console.log(trending);
  return (
    <>
      <div className="relative h-screen pt-20">
        <img
          src="/extraction.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
          alt=""
        />
        <div
          className="absolute top-0 left-0 w-full bg-black/50 h-full  -z-50"
          aria-hidden="true"
        />
        <div className="absolute px-8 md:px-16 lg:px-32 top-0 left-0 w-full h-full flex flex-col justify-center">
          <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4a1077]/40 via-transparent h-full  -z-50" />
          <div className="max-w-2xl">
            <h1 className="mt-4 text-6xl font-extrabold text-balance">
              Extraction
            </h1>
            <p className="mt-2 text-lg">2014 | 18+</p>
            <p className="mt-4 text-lg">
              A hardened gun-for-hire's latest mission becomes a soul-searching
              race to survive when he's sent into Bangladesh to rescue a drug
              lord's kidnapped son.
            </p>
          </div>
          <div className="flex  gap-4">
            <Link
              to="/watch/extraction"
              className="bg-transition px-4 py-2 rounded-md flex justify-center items-center text-sm font-bold"
            >
              <Play className="inline-block size-6 mr-2  " />
              Play
            </Link>
            <Link
              to="/watch/extraction"
              className="bg-gray-700/50 transition-all duration-300 hover:bg-gray-700 px-4 py-2 rounded-md  flex justify-center items-center text-sm font-bold"
            >
              <Info className="inline-block size-6 mr-2" />
              More info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
