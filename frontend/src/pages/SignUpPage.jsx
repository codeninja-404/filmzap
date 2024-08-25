import { Link } from "react-router-dom";
const SignUpPage = () => {
  return (
    <div className="h-screen w-screnn hero-bg">
      <header className="mx-6xl mx-auto  flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src="/FILMZAP.svg" alt="logo" className="w-52" />
        </Link>
      </header>
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-[#1a1a1aff]/80 rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>
          <form className="space-y-4 ">
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
              />
            </div>
            <div className="">
              <label
                htmlFor="username"
                className="text-sm font-medium text- blockgray-300 block"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2  mt-1 border-gray-500 border rounded-md bg-transparent focus:outline-none  focus:ring"
                placeholder="johndoe"
                id="username"
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="text-sm font-medium text- blockgray-300 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2  mt-1 border-gray-500 border rounded-md bg-transparent focus:outline-none  focus:ring"
                placeholder="••••••••"
                id="password"
              />
            </div>
            <button className="w-full py-2 text-white bg-transition  font-semibold uppercase rounded-md">
              Sign Up
            </button>
            <div>
              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-[#43d095] hover:underline font-bold"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
