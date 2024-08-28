import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authUser";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 w-full border-gray-600 transition-all duration-300 ${
        !isScrolled
          ? "bg-gray-800/50 shadow-lg"
          : "bg-gray-900/90 border-b  pb-2"
      }`}
    >
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <img src="/FILMZAP.svg" alt="FILMZAP Logo" className="w-32 md:w-52" />
        <Link
          to={user ? "/profile" : "/login"}
          className="text-white bg-transition transition-colors py-1 px-2 rounded"
        >
          {user ? "User" : "Sign In"}
        </Link>
        {user && (
          <button
            onClick={logout}
            className="text-white bg-red-500 transition-colors py-1 px-2 rounded"
          >
            Sign Out
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
