import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authUser";
import { LogOut, Menu, Search, X } from "lucide-react";

const Header = () => {
  const navLinks = [
    { to: "/movies", label: "Movies" },
    { to: "/tv-shows", label: "TV Shows" },
    { to: "/", label: "Search History" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
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
        <div className="flex gap-10">
          <img src="/FILMZAP.svg" alt="FILMZAP Logo" className="w-32 md:w-52" />
          {user ? (
            <ul className="hidden md:flex  gap-4 justify-center items-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="  hover:text-gray-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Search className="  cursor-pointer" />
              <Link
                to="/profile"
                className="  rounded-full bg-transition transition-colors p-[3px] "
              >
                <img
                  className="size-8 rounded-full"
                  src="/avatar2.png"
                  alt=""
                />
              </Link>

              <Menu
                onClick={() => toggleMenu()}
                className="md:hidden   cursor-pointer"
              />
              <LogOut onClick={logout} className="  cursor-pointer" />
            </>
          ) : (
            <Link
              to="/login"
              className="  bg-transition transition-colors py-1 px-2 rounded"
            >
              Sign In
            </Link>
          )}
        </div>
      </header>

      <div
        className={`fixed w-[250px] top-0 right-0 h-screen bg-gray-800/50 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" flex justify-end">
          <button
            onClick={() => toggleMenu()}
            className=" p-1 m-1 rounded-full  cursor-pointer bg-gray-500/70"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-8 p-4">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to} className="  hover:text-gray-500">
              {link.label}
            </Link>
          ))}
          <button onClick={logout} className="bg-transition rounded-md">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
