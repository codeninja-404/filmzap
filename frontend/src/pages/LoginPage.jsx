import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "../store/authUser";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggingIn } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      const origin = location.state?.from?.pathname || "/";
      navigate(origin);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto  flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src="/FILMZAP.svg" alt="logo" className="w-52" />
        </Link>
      </header>
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-[#191919]/70 rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-bold mb-4">Sign In</h1>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div className="">
              <label
                htmlFor="username"
                className="text-sm font-medium text- blockgray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2  mt-1 border-gray-500 border rounded-md bg-transparent focus:outline-none  focus:ring"
                placeholder="example@gmail.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 pr-10 py-2 mt-1 border-gray-500 border rounded-md bg-transparent focus:outline-none focus:ring"
                  placeholder="••••••••"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <Eye className="text-[#43d095]" size={20} />
                  ) : (
                    <EyeOff className="text-[#1f1f1f]" size={20} />
                  )}
                </button>
              </div>
            </div>
            <button className="w-full py-2 text-white bg-transition  font-semibold uppercase rounded-md">
              Sign Up
            </button>
            <div>
              <p className="text-center text-sm text-gray-400">
                New to FilmZap?{"   "}
                <Link
                  to={"/signup"}
                  className="text-[#43d095] hover:underline font-bold"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
