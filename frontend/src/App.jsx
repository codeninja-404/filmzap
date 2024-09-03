import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/home/HomePage";
import WatchPage from "./pages/WatchPage";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/shared/Footer";
import Loader from "./components/shared/Loader";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      await authCheck();
      setIsReady(true);
    };
    checkAuth();
  }, [authCheck]);

  if (!isReady) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUpPage />}
        />
        <Route
          path="/watch/:id"
          element={
            user ? (
              <WatchPage />
            ) : (
              <Navigate to="/login" state={{ from: location }} />
            )
          }
        />
        <Route
          path="/search"
          element={
            user ? (
              <SearchPage />
            ) : (
              <Navigate to="/login" state={{ from: location }} />
            )
          }
        />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
