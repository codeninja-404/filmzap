import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
const AuthScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="hero-bg relative">
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
    </div>
  );
};

export default AuthScreen;
