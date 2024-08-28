import { Database, LucideEye, Star, FileText } from "lucide-react";

const FeatureCard = ({ title, description, icon }) => (
  <div
    className="bg-gradient-to-l from-[#1f1f1f] from-[0%] via-[#362b4b] via-[25%] via-[#362b4b] via-[55%] to-[#1f1f1f]
 rounded-lg p-4 flex flex-col items-start space-y-3 "
  >
    <div className="bg-gradient-to-r from-[#000000] from-[0%] via-[#b14affab]  via-[25%] via-[#b14affab] via-[55%] to-[#000000] to-[100%] p-2 rounded-full">
      {icon}
    </div>
    <h3 className="text-white text-lg font-semibold">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

const MoreReasons = () => {
  const features = [
    {
      title: "Detailed Movie Reviews",
      description:
        "Read in-depth reviews covering plot, performances, direction, and more to help you decide what to watch next.",
      icon: <FileText />,
    },
    {
      title: "User Contributions",
      description:
        "Submit your own reviews and ratings, and engage with a community of movie enthusiasts.",
      icon: <LucideEye />,
    },
    {
      title: "Comprehensive Database",
      description:
        "Access an extensive database of movies, including detailed information about casts, crew, and filmography.",
      icon: <Database />,
    },
    {
      title: "Expert Opinions",
      description:
        "Benefit from expert reviews and ratings to get a professional perspective on the latest releases.",
      icon: <Star />,
    },
  ];

  return (
    <div className="my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        More Reasons to Explore FILMZAP
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
