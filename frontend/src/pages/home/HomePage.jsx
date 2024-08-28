import Header from "../../components/shared/Header";
import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {
  const { user } = useAuthStore();
  return (
    <div>
      <Header /> {user ? <HomeScreen /> : <AuthScreen />}
    </div>
  );
};

export default HomePage;
