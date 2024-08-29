import useGetTrending from "../../hooks/useGetTrending";

import TrendingBanner from "../../components/TrendingBanner";
const HomeScreen = () => {
  const { trending } = useGetTrending();
  console.log(trending);
  return (
    <>
      <TrendingBanner trending={trending} />
    </>
  );
};

export default HomeScreen;
