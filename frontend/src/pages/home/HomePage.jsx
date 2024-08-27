import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
import Footer from "../../components/shared/Footer";

const HomePage = () => {
  const user = false;
  return (
    <div>
      {user ? <HomeScreen /> : <AuthScreen />}
      <Footer />
    </div>
  );
};

export default HomePage;
