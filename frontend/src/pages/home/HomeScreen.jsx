import useGetTrending from "../../hooks/useGetTrending";

import TrendingBanner from "../../components/TrendingBanner";

import { useContentStore } from "../../store/content";
import { MOVIE_CATEGORIES, TV_CATEGORIES } from "../../utils/constants";
import ContentSlider from "../../components/sliders/ContentSlider";

const HomeScreen = () => {
  const { trending } = useGetTrending();
  const { contentType } = useContentStore();

  return (
    <>
      <TrendingBanner trending={trending} />
      <div className=" mx-auto max-w-6xl flex flex-col  gap-10 my-10 px-2">
        {contentType === "movie"
          ? MOVIE_CATEGORIES.map((category) => (
              <ContentSlider key={category.id} category={category} />
            ))
          : TV_CATEGORIES.map((category) => (
              <ContentSlider key={category.id} category={category} />
            ))}
      </div>
    </>
  );
};

export default HomeScreen;
