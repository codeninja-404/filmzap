import { Database, LucideEye, Star, TvIcon } from "lucide-react";

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-start space-y-3 hover:bg-gray-700 transition-colors duration-300">
    <div className="bg-blue-500 p-2 rounded-full">{icon}</div>
    <h3 className="text-white text-lg font-semibold">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

const MoreReasons = () => {
  const features = [
    {
      title: "Enjoy on Your Devices",
      description: "Access TMDB on smart TVs, phones, tablets, and more.",
      icon: <TvIcon />,
    },
    {
      title: "Personalized Watchlists",
      description: "Create and manage your movie and TV show watchlists.",
      icon: <LucideEye />,
    },
    {
      title: "Extensive Database",
      description:
        "Explore our vast collection of movies, TV shows, and celebrities.",
      icon: <Database />,
    },
    {
      title: "Community Ratings",
      description: "Rate and review titles, and see what others think.",
      icon: <Star />,
    },
  ];

  return (
    <div className="my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 ">
        More Reasons to Join FilmZap
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default MoreReasons;
