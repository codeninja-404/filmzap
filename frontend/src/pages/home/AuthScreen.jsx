import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
const AuthScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="hero-bg relative ">
        {/* Navbar */}
        <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
          <img src="/FILMZAP.svg" alt="FILMZAP Logo" className="w-32 md:w-52" />
          <Link
            to={"/login"}
            className="text-white bg-transition py-1 px-2 rounded"
          >
            Sign In
          </Link>
        </header>
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center py-40 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dive into Endless Entertainment
          </h1>
          <p className="text-lg mb-4">
            Movies, TV shows, and more, all in one place.
          </p>
          <p className="mb-4">
            Ready to explore? Enter your email to start your journey.
          </p>

          <form className="flex flex-col md:flex-row gap-4 w-1/2">
            <input
              type="email"
              className="p-2 flex-1 border-gray-500 border rounded-md bg-transparent focus:outline-none focus:ring"
              placeholder="Email address"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-transition text-xl lg:text-xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
              Start Watching
              <ChevronRight className="size-4 md:size-6" />
            </button>
          </form>
        </div>
        {/* devider */}
        <div className="bottom-0 overflow-hidden w-full absolute h-14">
          <div className="absolute -bottom-[28rem] mt-[100px] ml-[-50%] h-[500px] w-[200%] rounded-t-[100%] bg-gradient-to-r from-[#000000] from-[0%] via-[#b14affab]  via-[25%] via-[#b14affab] via-[55%] to-[#000000] to-[100%]" />
          <div className="absolute -bottom-[28.2rem] mt-[100px] ml-[-50%] h-[500px] w-[200%] rounded-t-[100%] bg-black overflow-hidden">
            {/* shadow */}
            <div className="absolute  top-0 bottom-20 left-0 right-0 text-white h-0  w-1/6 mx-auto shadow"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl h-20">
        <h1 className="py-2 font-bold text-3xl">Trending</h1>
        <div className="w-1/2 flex gap-4">
          <select
            className="p-2 flex-1 border-gray-500 border rounded-md bg-transparent focus:outline-none focus:ring"
            name=""
            id=""
          >
            <option className="text-black" value="bangladesh">
              Bangladesh
            </option>
            <option className="text-black" value="global">
              Global
            </option>
          </select>
          <select
            className="p-2 flex-1 border-gray-500 border rounded-md bg-transparent focus:outline-none focus:ring"
            name=""
            id=""
          >
            <option className="text-black" value="movie">
              Movie
            </option>
            <option className="text-black" value="tvshow">
              Tvshow
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default AuthScreen;
