import Header from "../../components/shared/Header";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {
  const user = false;
  return (
    <div>
      <Header /> {user ? <HomeScreen /> : <AuthScreen />}
    </div>
  );
};

export default HomePage;
